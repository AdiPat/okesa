import OpenAI from "openai";
import { LLMRunner } from ".";

const TokenizerResultsSchema = {
  words: "results of word tokenization",
  sentences: "results of sentence tokenization",
  phrases: "results of phrasal tokenization",
  whitespace: "results of whitespace tokenization",
  symbols: "results of symbol tokenization",
};

async function tokenize(brainRunner: LLMRunner, text: string) {
  const system = "You are a NLP (Natural Language Processing) Tokenizer";
  const prompt = `
    Perform tokenization on the given Text. \
    1. Tokenization Results Schema: \
    "${JSON.stringify(TokenizerResultsSchema)}" \
    2. Definitions: \
    "Word Tokenization: This is the most common type of tokenization, where the text is split into words. For example, the sentence "I love coding!" would be tokenized into the words "I", "love", and "coding". \
    Sentence Tokenization: In this type of tokenization, the text is split into sentences. For example, the paragraph "Hello! How are you? I'm doing great." would be tokenized into three sentences: "Hello!".
    Whitespace Tokenization: This is a simple form of tokenization where the text is split based on whitespace characters (spaces, tabs, newlines). For example, the sentence "Tokenization is important" would be tokenized into ["Tokenization", "is", "important"].
    Phrasal Tokenization: In some cases, it may be useful to tokenize phrases or multi-word expressions as single tokens. For example, the phrase "New York City" could be tokenized as ["New York City"] to preserve its meaning as a single entity.
    Symbol Tokenization: In addition to words and phrases, tokenization can also be applied to symbols or special characters. For example, the string "Hello, world!" could be tokenized into ["Hello", ",", "world", "!"].
    "
    3. Text:
    "${text}"`;

  const result = await brainRunner(system, prompt);

  return result;
}

export { tokenize };
