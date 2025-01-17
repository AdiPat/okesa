/**
 * This module contains the prompts for various NLP tasks that Okesa can perform.
 * @author Aditya Patange (AdiPat)
 * @file prompts.ts
 * @description Okesa NLP Engine is a simple and easy-to-use Natural Language Processing (NLP) library powered by OpenAI. This library provides a set of functions to perform various NLP tasks such as POS tagging, NER, Sentiment Analysis, Language Detection, Text Classification, Text Summarization, Keyword Extraction, Spell Checking, Stemming and Lemmatization, and Dependency Parsing.
 * @license MIT
 * @copyright © 2025 Aditya Patange
 * @module okesa
 * ⚡️ "Respect comes when you give it back." - Oen
 */

export const PROMPTS: {
  [key: string]: Function;
} = {
  SYSTEM: () => `
          You are Okesa, a powerful NLP AI engine. You will be given a variety of tasks to complete.
          You can generate text, analyze text, and perform a variety of other tasks.
          Some of the tasks you can help with are:
          - POS Tagging
          - Named Entity Recognition
          - Sentiment Analysis
          - Language Detection
          - Text Generation
          - Text Summarization
          - Keyword Extraction
          - Spell Checking
          - Stemming and Lemmatization
          - Dependency Parsing
          - Text Classification
          - Question Answering
          - Text Similarity
          - Text Translation
  
          INSTRUCTIONS:
          - If you are asked to perform a task that you cannot do, respond with "I cannot perform that task."
          - Always respond with the most accurate information you can provide.
          - Always respond in JSON format.
          - Ensure responses strictly follow the provided JSON schema for each task.
          - Handle edge cases such as empty inputs or unsupported languages gracefully, returning appropriate error messages.
      `,

  POS_TAGGING: (text: string) => `
          Perform POS tagging on the given text. Return the result in JSON format with tokens and their respective POS tags.
          INSTRUCTIONS:
          - Split the input into tokens and assign POS tags to each token.
          - Handle punctuation and special characters appropriately.
          - If the input text is empty, return an error message in the JSON output.
          Example:
          Input: "The quick brown fox jumps over the lazy dog."
          Output: [
            { "word": "The", "pos": "DT" },
            { "word": "quick", "pos": "JJ" },
            { "word": "brown", "pos": "JJ" },
            { "word": "fox", "pos": "NN" },
            { "word": "jumps", "pos": "VBZ" },
            { "word": "over", "pos": "IN" },
            { "word": "the", "pos": "DT" },
            { "word": "lazy", "pos": "JJ" },
            { "word": "dog", "pos": "NN" }
          ]
          Text: ${text}
      `,

  NER: (text: string) => `
          Perform Named Entity Recognition (NER) on the given text. Return the result in JSON format with entity types and offsets.
          INSTRUCTIONS:
          - Identify named entities such as people, locations, organizations, and dates.
          - Include the start and end offsets of each entity in the text.
          - If no entities are found, return an empty result array.
          Example:
          Input: "Barack Obama was born in Hawaii."
          Output: [
            { "entity": "Barack Obama", "label": "PERSON", "start": 0, "end": 12 },
            { "entity": "Hawaii", "label": "LOCATION", "start": 28, "end": 34 }
          ]
          Text: ${text}
      `,

  SENTIMENT_ANALYSIS: (text: string) => `
          Perform Sentiment Analysis on the given text. Return the result in JSON format with sentiment and confidence score.
          INSTRUCTIONS:
          - Analyze the sentiment of the input text and classify it as "positive", "negative", or "neutral".
          - Provide a confidence score between 0 and 1 for the sentiment classification.
          - If the input is empty, return an error message.
          Example:
          Input: "I love programming, it’s so fulfilling!"
          Output: {
            "sentiment": "positive",
            "confidence": 0.95
          }
          Text: ${text}
      `,

  LANGUAGE_DETECTION: (text: string) => `
          Detect the language of the given text. Return the result in JSON format with language code and confidence score.
          INSTRUCTIONS:
          - Identify the language of the input text and return its ISO 639-1 language code.
          - Provide a confidence score between 0 and 1 for the language detection.
          - If the input is empty or the language is unsupported, return an appropriate error message.
          Example:
          Input: "Bonjour tout le monde."
          Output: {
            "language": "fr",
            "confidence": 0.98
          }
          Text: ${text}
      `,

  TEXT_CLASSIFICATION: (text: string) => `
          Classify the given text into predefined classes. Return the result in JSON format with class labels and confidence scores.
          INSTRUCTIONS:
          - Use predefined classes relevant to the domain of the input text (e.g., Finance, Health, Technology).
          - Include a confidence score for the classification.
          - Handle inputs with ambiguous classification by returning multiple possible classes with their scores.
          Example:
          Input: "The stock market is experiencing a downturn."
          Output: {
            "class": "Finance",
            "confidence": 0.92
          }
          Text: ${text}
      `,

  TEXT_SUMMARIZATION: (text: string) => `
          Generate a concise summary of the given text. Return the result in JSON format with the summary.
          INSTRUCTIONS:
          - Summarize the text into a shorter version while preserving the main ideas.
          - Ensure the summary is grammatically correct and coherent.
          - Handle inputs that are too short to summarize by returning the original text.
          Example:
          Input: "Artificial intelligence is transforming industries with automation and efficiency gains. Many companies are adopting AI solutions to improve their workflows."
          Output: {
            "summary": "AI is transforming industries with automation, improving workflows."
          }
          Text: ${text}
      `,

  KEYWORD_EXTRACTION: (text: string) => `
          Extract keywords from the given text. Return the result in JSON format with keywords.
          INSTRUCTIONS:
          - Identify key terms or phrases that are most relevant to the input text.
          - If no significant keywords are found, return an empty result array.
          Example:
          Input: "The quick brown fox jumps over the lazy dog."
          Output: [
            "fox",
            "dog"
          ]
          Text: ${text}
      `,

  SPELL_CHECKING: (text: string) => `
          Perform spell checking on the given text. Return the corrected text in JSON format.
          INSTRUCTIONS:
          - Identify and correct spelling errors in the input text.
          - Preserve the original structure of the text.
          - If no errors are found, return the original text as "corrected_text".
          Example:
          Input: "Ths is a smple sentence."
          Output: {
            "corrected_text": "This is a simple sentence."
          }
          Text: ${text}
      `,

  STEMMING_LEMMATIZATION: (text: string) => `
          Perform stemming and lemmatization on the given text. Return the result in JSON format with tokens and their stems/lemmas.
          INSTRUCTIONS:
          - Process each token to extract its stem and lemma.
          - Handle irregular word forms appropriately.
          - If the input is empty, return an error message.
          Example:
          Input: "The foxes are running quickly."
          Output: [
            { "token": "foxes", "stem": "fox", "lemma": "fox" },
            { "token": "running", "stem": "run", "lemma": "run" },
            { "token": "quickly", "stem": "quick", "lemma": "quick" }
          ]
          Text: ${text}
      `,

  DEPENDENCY_PARSING: (text: string) => `
          Perform dependency parsing on the given text. Return the result in JSON format with dependency relations.
          INSTRUCTIONS:
          - Analyze the syntactic structure of the text and identify dependency relationships between tokens.
          - Include the head token for each dependency relation.
          - Handle edge cases such as incomplete sentences or fragments by providing partial parsing results.
          Example:
          Input: "The cat sat on the mat."
          Output: [
            { "word": "cat", "dependency": "nsubj", "head": 1 },
            { "word": "sat", "dependency": "ROOT", "head": 0 },
            { "word": "on", "dependency": "prep", "head": 1 },
            { "word": "mat", "dependency": "pobj", "head": 2 }
          ]
          Text: ${text}
      `,

  TOKENIZATION: (text: string) => `
          Tokenize the given text. Return the result in JSON format with tokens and their positions.
          INSTRUCTIONS:
          - Split the text into individual tokens and include their character positions (start and end indices).
          - Handle special cases such as punctuation and whitespace appropriately.
          - If the input is empty, return an error message.
          Example:
          Input: "Tokenize this sentence."
          Output: [
            { "token": "Tokenize", "start": 0, "end": 8 },
            { "token": "this", "start": 9, "end": 13 },
            { "token": "sentence", "start": 14, "end": 22 }
          ]
          Text: ${text}
      `,
};
