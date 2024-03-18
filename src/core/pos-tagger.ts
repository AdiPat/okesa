import { LLMRunner } from ".";

const PosTaggingJSONSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "array",
  items: {
    type: "object",
    properties: {
      word: {
        type: "string",
      },
      pos: {
        type: "string",
      },
    },
    required: ["word", "pos"],
  },
};

async function posTag(brainRunner: LLMRunner, text: string) {
  const system = "You are a NLP (Natural Language Processing) Tokenizer";

  const prompt = `Perform Part Of Speech (POS) tagging on the given text. Return the result in JSON as per the given schema.\
  Only return a valid JSON.\
  1. JSON Schema:
  ${JSON.stringify(PosTaggingJSONSchema)}
  2. Text:
  "${text}"
`;

  const result = await brainRunner(system, prompt);

  return result;
}

export { posTag };
