const NlpConfig = {
  POS_TAGGER: {
    schema: {
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
    },
    prompt: `Perform Part Of Speech (POS) tagging on the given text. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  TOKENIZER: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        words: {
          type: "string",
          description: "Results of word tokenization",
        },
        sentences: {
          type: "string",
          description: "Results of sentence tokenization",
        },
        phrases: {
          type: "string",
          description: "Results of phrasal tokenization",
        },
        whitespace: {
          type: "string",
          description: "Results of whitespace tokenization",
        },
        symbols: {
          type: "string",
          description: "Results of symbol tokenization",
        },
      },
      required: ["words", "sentences", "phrases", "whitespace", "symbols"],
    },
    prompt: `
      Perform tokenization on the given Text. \
      1. Tokenization Results Schema: \
      {schema} \
      2. Definitions: \
      "Word Tokenization: This is the most common type of tokenization, where the text is split into words. For example, the sentence "I love coding!" would be tokenized into the words "I", "love", and "coding". \
      Sentence Tokenization: In this type of tokenization, the text is split into sentences. For example, the paragraph "Hello! How are you? I'm doing great." would be tokenized into three sentences: "Hello!".
      Whitespace Tokenization: This is a simple form of tokenization where the text is split based on whitespace characters (spaces, tabs, newlines). For example, the sentence "Tokenization is important" would be tokenized into ["Tokenization", "is", "important"].
      Phrasal Tokenization: In some cases, it may be useful to tokenize phrases or multi-word expressions as single tokens. For example, the phrase "New York City" could be tokenized as ["New York City"] to preserve its meaning as a single entity.
      Symbol Tokenization: In addition to words and phrases, tokenization can also be applied to symbols or special characters. For example, the string "Hello, world!" could be tokenized into ["Hello", ",", "world", "!"].
      "
      3. Text:
      "{text}"`,
  },

  NER: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "array",
      items: {
        type: "object",
        properties: {
          entity: {
            type: "string",
          },
          label: {
            type: "string",
          },
          start: {
            type: "number",
          },
          end: {
            type: "number",
          },
        },
        required: ["entity", "label", "start", "end"],
      },
    },
    prompt: `Perform Named Entity Recognition (NER) on the given text. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  SENTIMENT_ANALYSIS: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        sentiment: {
          type: "string",
          enum: ["positive", "negative", "neutral"],
        },
        confidence: {
          type: "number",
          minimum: 0,
          maximum: 1,
        },
      },
      required: ["sentiment", "confidence"],
    },
    prompt: `Perform Sentiment Analysis on the given text. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  LANGUAGE_DETECTION: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        language: {
          type: "string",
        },
        confidence: {
          type: "number",
          minimum: 0,
          maximum: 1,
        },
      },
      required: ["language", "confidence"],
    },
    prompt: `Detect the language of the given text. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  TEXT_CLASSIFICATION: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        class: {
          type: "string",
        },
        confidence: {
          type: "number",
          minimum: 0,
          maximum: 1,
        },
      },
      required: ["class", "confidence"],
    },
    prompt: `Classify the given text into predefined classes. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  TEXT_SUMMARIZATION: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        summary: {
          type: "string",
        },
      },
      required: ["summary"],
    },
    prompt: `Generate a concise summary of the given text. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  KEYWORD_EXTRACTION: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "array",
      items: {
        type: "string",
      },
    },
    prompt: `Extract keywords from the given text. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  SPELL_CHECKING: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        corrected_text: {
          type: "string",
        },
      },
      required: ["corrected_text"],
    },
    prompt: `Perform spell checking on the given text. Return the corrected text in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  STEMMING_LEMMATIZATION: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "array",
      items: {
        type: "string",
      },
    },
    prompt: `Perform stemming and lemmatization on the given text. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },

  DEPENDENCY_PARSING: {
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "array",
      items: {
        type: "object",
        properties: {
          word: {
            type: "string",
          },
          dependency: {
            type: "string",
          },
          head: {
            type: "number",
          },
        },
        required: ["word", "dependency", "head"],
      },
    },
    prompt: `Perform dependency parsing on the given text. Return the result in JSON as per the given schema.\
      Only return a valid JSON.\
      1. JSON Schema: \
      {schema} \
      2. Text: \
      {text}`,
  },
};

export { NlpConfig };
