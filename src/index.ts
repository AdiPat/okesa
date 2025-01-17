/**
 * Okesa NLP Engine: A simple and easy-to-use Natural Language Processing (NLP) library powered by OpenAI.
 * @file index.ts
 * @description Okesa NLP Engine is a simple and easy-to-use Natural Language Processing (NLP) library powered by OpenAI. This library provides a set of functions to perform various NLP tasks such as POS tagging, NER, Sentiment Analysis, Language Detection, Text Classification, Text Summarization, Keyword Extraction, Spell Checking, Stemming and Lemmatization, and Dependency Parsing.
 * @license MIT
 * @copyright © 2025 Aditya Patange
 * @module okesa
 * ⚡️ "What is my data, is not for you to see." - AdiPat
 */

import { openai } from "@ai-sdk/openai";
import { AI } from "./ai";
import { z } from "zod";
import chalk from "chalk";
import { DEFAULT_MODEL_NAME } from "./constants";
import dotenv from "dotenv";
import { PROMPTS } from "./prompts";

/**
 * The 'function options' object which is the input to all the NLP functions.
 */
export interface FunctionOptions {
  text: string;
  modelName?: string;
  silentStart?: boolean;
}

let initialized = false;

/**
 * Log messages with different modes using chalk.
 * @param message The message to log.
 * @param mode The mode of the log (debug, info, error).
 */
function log(message: string, mode: "debug" | "info" | "error" = "info") {
  const modes = {
    debug: chalk.blueBright,
    info: chalk.greenBright,
    error: chalk.redBright,
  };
  const emojis = {
    debug: "🐛",
    info: "ℹ️",
    error: "❌",
  };
  console.log(modes[mode](`${emojis[mode]} ${message}`));
}

/**
 *
 * Initialize the Okesa NLP module.
 * This function checks if the OpenAI API key is set and valid.
 * @param void
 * @returns void
 *
 */
export async function init(silent = true): Promise<boolean> {
  try {
    if (!silent) {
      log("🚀 Initializing Okesa NLP Engine...", "info");
    }

    if (!silent) {
      log(
        "🔑 Checking for the OpenAI API key in the environment variables...",
        "info"
      );
    }

    dotenv.config({ path: ".env", override: true });

    const apiKey = process.env.OPENAI_API_KEY;
    const pingTestMaxTokens = 48;

    if (!apiKey) {
      log(
        "Please set the OPENAI_API_KEY environment variable before running the program.",
        "error"
      );
      return false;
    } else {
      if (!silent) {
        log("✅ OpenAI API key found. Running ping test now...", "info");
      }
    }

    // ping test to check if the API key is valid
    await AI.generateText({
      prompt: "What is the meaning of life?",
      model: openai("gpt-4o"),
      maxTokens: pingTestMaxTokens,
    });

    if (!silent) {
      log(
        "✅ OpenAI API key is valid. Okesa NLP Engine is ready to use.",
        "info"
      );
    }

    return true;
  } catch (error: any) {
    log(`Unexpected error in init function: ${error?.message}.`, "error");
    console.error(error);
    return false;
  }
}

/**
 * Internal function to handle initialization and call the generateObject method.
 * @param options The options object containing text and modelName.
 * @param prompt The prompt to be used for the OpenAI API.
 * @param system The system message for the OpenAI API.
 * @param schema The schema for the expected response.
 * @param schemaDescription The description of the schema.
 * @returns The result of the generateObject method.
 */
async function generateObjectInternal<T>(
  options: FunctionOptions,
  promptKey: string,
  schema: z.ZodType<T>,
  schemaDescription: string,
  system = PROMPTS.SYSTEM()
): Promise<T | null> {
  try {
    if (!Object.keys(PROMPTS).includes(promptKey)) {
      log(`Invalid prompt key: ${promptKey}.`, "error");
      return null;
    }

    if (!initialized) {
      const success = await init(options.silentStart);
      if (!success) return null;
      initialized = true;
    }
    const { text, modelName = DEFAULT_MODEL_NAME } = options;
    const prompt = PROMPTS[promptKey](text);
    try {
      const model = openai(modelName);
      const config = {
        prompt,
        system,
        schema,
        schemaDescription,
        model,
      };
      const { object } = await AI.generateObject(config);
      return object;
    } catch (error: any) {
      log(`Unexpected error: ${error?.message}.`, "error");
      console.error(error);
      return null;
    }
  } catch (error: any) {
    log(
      `Unexpected error in generateObjectInternal function: ${error?.message}.`,
      "error"
    );
    console.error(error);
    return null;
  }
}

/**
 * The response object for the POS tagging function.
 */
export interface POSTagging {
  word: string;
  pos: string;
}

/**
 * Perform POS tagging on the given text.
 * @param options The options object containing text and modelName.
 * @returns The POS tagging result.
 */
export async function posTagging(
  options: FunctionOptions
): Promise<POSTagging[]> {
  const promptKey = "POS_TAGGING";
  const schema = z.object({
    result: z.array(
      z.object({
        word: z.string(),
        pos: z.string(),
      })
    ),
  });
  const schemaDescription = `POS tagging Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || [];
}

/**
 * The response object for Tokenization function.
 */
export interface Tokenization {
  words: string;
  sentences: string;
  phrases: string;
  whitespace: string;
  symbols: string;
}

/**
 * Tokenize the given text.
 * @param options The options object containing text and modelName.
 * @returns The tokenization result.
 */
export async function tokenize(
  options: FunctionOptions
): Promise<Tokenization | null> {
  const promptKey = "TOKENIZATION";
  const schema = z.object({
    result: z.object({
      words: z.string(),
      sentences: z.string(),
      phrases: z.string(),
      whitespace: z.string(),
      symbols: z.string(),
    }),
  });
  const schemaDescription = `Tokenization Results Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}

/**
 * The response object for the NER function.
 */
export interface NER {
  entity: string;
  label: string;
  start: number;
  end: number;
}

/**
 * Perform Named Entity Recognition (NER) on the given text.
 * @param options The options object containing text and modelName.
 * @returns The NER result.
 */
export async function ner(options: FunctionOptions): Promise<NER[]> {
  const promptKey = "NER";

  const schema = z.object({
    result: z.array(
      z.object({
        entity: z.string(),
        label: z.string(),
        start: z.number(),
        end: z.number(),
      })
    ),
  });
  const schemaDescription = `NER Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || [];
}

/**
 * The response object for Sentiment Analysis function.
 */
export interface SentimentAnalysis {
  sentiment: string;
  confidence: number;
}

/**
 * Perform Sentiment Analysis on the given text.
 * @param options The options object containing text and modelName.
 * @returns The sentiment analysis result.
 */
export async function sentimentAnalysis(
  options: FunctionOptions
): Promise<SentimentAnalysis | null> {
  const promptKey = "SENTIMENT_ANALYSIS";

  const schema = z.object({
    result: z.object({
      sentiment: z.enum(["positive", "negative", "neutral"]),
      confidence: z.number().min(0).max(1),
    }),
  });
  const schemaDescription = `Sentiment Analysis Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}

/**
 * The response object for Language Detection function.
 */
export interface LanguageDetection {
  language: string;
  confidence: number;
}

/**
 * Detect the language of the given text.
 * @param options The options object containing text and modelName.
 * @returns The language detection result.
 */
export async function languageDetection(
  options: FunctionOptions
): Promise<LanguageDetection | null> {
  const promptKey = "LANGUAGE_DETECTION";

  const schema = z.object({
    result: z.object({
      language: z.string(),
      confidence: z.number().min(0).max(1),
    }),
  });
  const schemaDescription = `Language Detection Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}

/**
 * The response object for Text Classification function.
 */
export interface TextClassification {
  class: string;
  confidence: number;
}

/**
 * Classify the given text into predefined classes.
 * @param options The options object containing text and modelName.
 * @returns The text classification result.
 */
export async function textClassification(
  options: FunctionOptions
): Promise<TextClassification | null> {
  const promptKey = "TEXT_CLASSIFICATION";

  const schema = z.object({
    result: z.object({
      class: z.string(),
      confidence: z.number().min(0).max(1),
    }),
  });
  const schemaDescription = `Text Classification Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}

/**
 * The response object for Text Summarization function.
 */
export interface TextSummarization {
  summary: string;
}

/**
 * Generate a concise summary of the given text.
 * @param options The options object containing text and modelName.
 * @returns The text summarization result.
 */
export async function textSummarization(
  options: FunctionOptions
): Promise<TextSummarization | null> {
  const promptKey = "TEXT_SUMMARIZATION";

  const schema = z.object({
    result: z.object({
      summary: z.string(),
    }),
  });
  const schemaDescription = `Text Summarization Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}

/**
 * The response object for Keyword Extraction function.
 */
export type KeywordExtraction = string[];

/**
 * Extract keywords from the given text.
 * @param options The options object containing text and modelName.
 * @returns The keyword extraction result.
 */
export async function keywordExtraction(
  options: FunctionOptions
): Promise<KeywordExtraction | null> {
  const promptKey = "KEYWORD_EXTRACTION";

  const schema = z.object({
    result: z.array(z.string()),
  });
  const schemaDescription = `Keyword Extraction Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}

/**
 * The response object for Spell Checking function.
 */
export interface SpellChecking {
  corrected_text: string;
}

/**
 * Perform spell checking on the given text.
 * @param options The options object containing text and modelName.
 * @returns The spell checking result.
 */
export async function spellChecking(
  options: FunctionOptions
): Promise<SpellChecking | null> {
  const promptKey = "SPELL_CHECKING";

  const schema = z.object({
    result: z.object({
      corrected_text: z.string(),
    }),
  });
  const schemaDescription = `Spell Checking Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}

/**
 * The response object for Stemming and Lemmatization function.
 */
export type StemmingLemmatization = string[];

/**
 * Perform stemming and lemmatization on the given text.
 * @param options The options object containing text and modelName.
 * @returns The stemming and lemmatization result.
 */
export async function stemmingLemmatization(
  options: FunctionOptions
): Promise<StemmingLemmatization | null> {
  const promptKey = "STEMMING_LEMMATIZATION";

  const schema = z.object({
    result: z.array(z.string()),
  });
  const schemaDescription = `Stemming and Lemmatization Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}

/**
 * The response object for Dependency Parsing function.
 */
export interface DependencyParsing {
  word: string;
  dependency: string;
  head: number;
}

/**
 * Perform dependency parsing on the given text.
 * @param options The options object containing text and modelName.
 * @returns The dependency parsing result.
 */
export async function dependencyParsing(
  options: FunctionOptions
): Promise<DependencyParsing[] | null> {
  const promptKey = "DEPENDENCY_PARSING";

  const schema = z.object({
    result: z.array(
      z.object({
        word: z.string(),
        dependency: z.string(),
        head: z.number(),
      })
    ),
  });
  const schemaDescription = `Dependency Parsing Schema`;

  const result = await generateObjectInternal(
    options,
    promptKey,
    schema,
    schemaDescription
  );

  return result?.result || null;
}
