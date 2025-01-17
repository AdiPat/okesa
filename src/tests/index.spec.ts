import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  init,
  posTagging,
  tokenize,
  ner,
  sentimentAnalysis,
  languageDetection,
  textClassification,
  textSummarization,
  keywordExtraction,
  spellChecking,
  stemmingLemmatization,
  dependencyParsing,
} from "../index";
import { AI } from "../ai";

describe("Okesa NLP Engine", () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    const generateTextSpy = vi.spyOn(AI, "generateText");
    const generateObjectSpy = vi.spyOn(AI, "generateObject");

    const mockGenerateText = async () => {
      return { text: "Hello, world!" };
    };

    const mockGenerateObject = async (config: any) => {
      switch (config.schemaDescription) {
        case "POS tagging Schema":
          return {
            object: {
              posTagging: [
                { word: "I", pos: "PRP" },
                { word: "love", pos: "VBP" },
                { word: "coding", pos: "VBG" },
                { word: ".", pos: "." },
              ],
            },
          };
        case "Tokenization Results Schema":
          return {
            object: {
              words: "I love coding",
              sentences: "I love coding.",
              phrases: "I love coding",
              whitespace: "I love coding",
              symbols: "I love coding.",
            },
          };
        case "NER Schema":
          return {
            object: [
              { entity: "Barack Obama", label: "PERSON", start: 0, end: 12 },
              { entity: "44th", label: "ORDINAL", start: 21, end: 25 },
              { entity: "President", label: "TITLE", start: 26, end: 35 },
              {
                entity: "United States",
                label: "LOCATION",
                start: 43,
                end: 56,
              },
            ],
          };
        case "Sentiment Analysis Schema":
          return {
            object: {
              sentiment: "positive",
              confidence: 0.95,
            },
          };
        case "Language Detection Schema":
          return {
            object: {
              language: "English",
              confidence: 0.99,
            },
          };
        case "Text Classification Schema":
          return {
            object: {
              class: "Positive",
              confidence: 0.98,
            },
          };
        case "Text Summarization Schema":
          return {
            object: {
              summary: "Coding is enjoyable and fulfilling.",
            },
          };
        case "Keyword Extraction Schema":
          return {
            object: ["coding", "love"],
          };
        case "Spell Checking Schema":
          return {
            object: {
              corrected_text: "I love coding.",
            },
          };
        case "Stemming and Lemmatization Schema":
          return {
            object: ["love", "coding"],
          };
        case "Dependency Parsing Schema":
          return {
            object: [
              { word: "I", dependency: "nsubj", head: 2 },
              { word: "love", dependency: "ROOT", head: 0 },
              { word: "coding", dependency: "dobj", head: 2 },
            ],
          };
        default:
          return { object: {} };
      }
    };

    generateTextSpy.mockImplementation(mockGenerateText as any);
    generateObjectSpy.mockImplementation(mockGenerateObject as any);

    const success = await init(true);
    expect(success).toBe(true);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should perform POS tagging", async () => {
    const generateObjectSpy = vi.spyOn(AI, "generateObject");

    const mockGenerateObject = async () => {
      return {
        object: {
          posTagging: [
            { word: "I", pos: "PRP" },
            { word: "love", pos: "VBP" },
            { word: "coding", pos: "VBG" },
            { word: ".", pos: "." },
          ],
        },
      };
    };

    generateObjectSpy.mockImplementation(mockGenerateObject as any);

    const result = await posTagging({ text: "I love coding." });
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toHaveProperty("word");
    expect(result[0]).toHaveProperty("pos");
  });

  it("should perform tokenization", async () => {
    const result = await tokenize({ text: "I love coding." });
    expect(result).not.toBeNull();
    expect(result).toHaveProperty("words");
    expect(result).toHaveProperty("sentences");
  });

  it("should perform NER", async () => {
    const result = await ner({
      text: "Barack Obama was the 44th President of the United States.",
    });
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toHaveProperty("entity");
    expect(result[0]).toHaveProperty("label");
  });

  it("should perform sentiment analysis", async () => {
    const result = await sentimentAnalysis({ text: "I love coding." });
    expect(result).not.toBeNull();
    expect(result).toHaveProperty("sentiment");
    expect(result).toHaveProperty("confidence");
  });

  it("should detect language", async () => {
    const result = await languageDetection({ text: "I love coding." });
    expect(result).not.toBeNull();
    expect(result).toHaveProperty("language");
    expect(result).toHaveProperty("confidence");
  });

  it("should classify text", async () => {
    const result = await textClassification({ text: "I love coding." });
    expect(result).not.toBeNull();
    expect(result).toHaveProperty("class");
    expect(result).toHaveProperty("confidence");
  });

  it("should summarize text", async () => {
    const result = await textSummarization({
      text: "I love coding. It is very enjoyable and fulfilling.",
    });
    expect(result).not.toBeNull();
    expect(result).toHaveProperty("summary");
  });

  it("should extract keywords", async () => {
    const result = await keywordExtraction({ text: "I love coding." });
    expect(result).toBeInstanceOf(Array);
  });

  it("should perform spell checking", async () => {
    const result = await spellChecking({ text: "I lov coding." });
    expect(result).not.toBeNull();
    expect(result).toHaveProperty("corrected_text");
  });

  it("should perform stemming and lemmatization", async () => {
    const result = await stemmingLemmatization({ text: "I love coding." });
    expect(result).toBeInstanceOf(Array);
  });

  it("should perform dependency parsing", async () => {
    const result = await dependencyParsing({ text: "I love coding." });
    expect(result).toBeInstanceOf(Array);
    expect(result?.[0]).toHaveProperty("word");
    expect(result?.[0]).toHaveProperty("dependency");
    expect(result?.[0]).toHaveProperty("head");
  });
});
