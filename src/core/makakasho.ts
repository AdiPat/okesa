import OpenAI from "openai";
import { OkesaInitParameters } from "../types";
import { tokenize } from "./tokenizer";

class Makakasho {
  private brain: OpenAI;

  constructor({ okesaApiKey }: OkesaInitParameters) {
    this.brain = new OpenAI({ apiKey: okesaApiKey });
  }

  async runBrain(seed: string, prompt: string): Promise<string | null> {
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

  tokenize(text: string) {
    return tokenize(this.runBrain.bind(this), text);
  }
}

export { Makakasho };
