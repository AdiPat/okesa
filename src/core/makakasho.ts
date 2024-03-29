import OpenAI from "openai";
import { OkesaInitParameters } from "../types";
import { NlpConfig } from "./nlp-config";

class Makakasho {
  private brain: OpenAI;
  private MakakashoInitiator =
    "You are Makakasho, a NLP (Natural Language Processing) Cyborg that responds. \
     You perform NLP actions as defined by the user on a given text. ";

  constructor({ okesaApiKey }: OkesaInitParameters) {
    this.brain = new OpenAI({ apiKey: okesaApiKey });
  }

  async activateBrain(seed: string, prompt: string): Promise<string | null> {
    const result = await this.brain.chat.completions.create({
      messages: [
        {
          role: "system",
          content: seed,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-4",
    });

    const resultContent = result.choices[0].message.content;

    const tokens = JSON.parse(resultContent as string);

    return tokens;
  }

  do(config: { schema: object; prompt: string }, text: string) {
    const { schema, prompt } = NlpConfig.TOKENIZER;

    const fullPrompt =
      prompt
        .replace("{schema}", JSON.stringify(schema))
        .replace("{text}", text) + "\n ONLY RETURN VALID JSON.";

    return this.activateBrain(this.MakakashoInitiator, fullPrompt);
  }
}

export { Makakasho };
