/**
 * Okesa NLP Engine: A simple and easy-to-use Natural Language Processing (NLP) library powered by OpenAI.
 * @file index.ts
 * @description Okesa NLP Engine is a simple and easy-to-use Natural Language Processing (NLP) library powered by OpenAI. This library provides a set of functions to perform various NLP tasks such as POS tagging, NER, Sentiment Analysis, Language Detection, Text Classification, Text Summarization, Keyword Extraction, Spell Checking, Stemming and Lemmatization, and Dependency Parsing.
 * @license MIT
 * @copyright © 2025 Aditya Patange
 * @module okesa
 * ⚡️ "What is my data, is not for you to see." - AdiPat
 */
/**
 * The 'function options' object which is the input to all the NLP functions.
 */
export interface FunctionOptions {
    text: string;
    modelName?: string;
    silentStart?: boolean;
}
/**
 *
 * Initialize the Okesa NLP module.
 * This function checks if the OpenAI API key is set and valid.
 * @param void
 * @returns void
 *
 */
export declare function init(silent?: boolean): Promise<boolean>;
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
export declare function posTagging(options: FunctionOptions): Promise<POSTagging[]>;
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
export declare function tokenize(options: FunctionOptions): Promise<Tokenization | null>;
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
export declare function ner(options: FunctionOptions): Promise<NER[]>;
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
export declare function sentimentAnalysis(options: FunctionOptions): Promise<SentimentAnalysis | null>;
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
export declare function languageDetection(options: FunctionOptions): Promise<LanguageDetection | null>;
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
export declare function textClassification(options: FunctionOptions): Promise<TextClassification | null>;
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
export declare function textSummarization(options: FunctionOptions): Promise<TextSummarization | null>;
/**
 * The response object for Keyword Extraction function.
 */
export type KeywordExtraction = string[];
/**
 * Extract keywords from the given text.
 * @param options The options object containing text and modelName.
 * @returns The keyword extraction result.
 */
export declare function keywordExtraction(options: FunctionOptions): Promise<KeywordExtraction | null>;
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
export declare function spellChecking(options: FunctionOptions): Promise<SpellChecking | null>;
/**
 * The response object for Stemming and Lemmatization function.
 */
export type StemmingLemmatization = string[];
/**
 * Perform stemming and lemmatization on the given text.
 * @param options The options object containing text and modelName.
 * @returns The stemming and lemmatization result.
 */
export declare function stemmingLemmatization(options: FunctionOptions): Promise<StemmingLemmatization | null>;
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
export declare function dependencyParsing(options: FunctionOptions): Promise<DependencyParsing[] | null>;
