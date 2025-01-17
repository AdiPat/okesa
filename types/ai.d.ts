/**
 * A simple wrapper over Vercel AI SDK Core to generate text and object responses.
 * @author Aditya Patange (AdiPat)
 * @file ai.ts
 * @description Okesa NLP Engine is a simple and easy-to-use Natural Language Processing (NLP) library powered by OpenAI. This library provides a set of functions to perform various NLP tasks such as POS tagging, NER, Sentiment Analysis, Language Detection, Text Classification, Text Summarization, Keyword Extraction, Spell Checking, Stemming and Lemmatization, and Dependency Parsing.
 * @license MIT
 * @copyright © 2025 Aditya Patange
 * @module okesa
 * ⚡️ "To code slow, think fast." - Aditya Patange
 */
import { generateText, generateObject } from "ai";
export declare const AI: {
    generateText: typeof generateText;
    generateObject: typeof generateObject;
};
