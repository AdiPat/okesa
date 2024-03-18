import { LLMRunner } from ".";

const PosTaggingJSONSchema = [
  { word: "string", pos: "the identified part of speech" },
];

async function posTag(brainRunner: LLMRunner, text: string) {
  const system = "You are a NLP (Natural Language Processing) Tokenizer";

  const prompt = `Perform Part Of Speech (POS) tagging on the given text. Return the result in JSON as per the given schema.\
  1. JSON Schema:
  ${JSON.stringify(PosTaggingJSONSchema)}
  2. Text:
  "${text}"
`;

  const result = await brainRunner(system, prompt);

  return result;
}

export { posTag };
