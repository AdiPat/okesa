# Okesa 🪐
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16.x-green)](https://nodejs.org/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)](#contributors)

Okesa is a general-purpose, powerful, and versatile NLP (Natural Language Processing) library for Node.js, designed to provide a wide range of NLP features for text analysis and processing.

<p align="center" width="100%">
    <img height="300px" src="https://i.ibb.co/4WHKQQP/okesa-logo.png">
</p>



## Background 💡

The name "Okesa" is derived from the Japanese word for "priest’s outer robe, a rectangle sewn most often of seven panels," reflecting the library's versatility and ability to handle complex text processing tasks with ease, much like the intricate stitching of a traditional robe. Okesa embodies the Zen tradition of simplicity and precision, mirroring the library's approach to NLP. 

Okesa aims to make advanced text analysis accessible to developers of all levels, offering intuitive APIs and comprehensive documentation. Whether you're building chatbots, analyzing customer feedback, or extracting insights from large datasets, Okesa provides the tools you need to enhance your applications with powerful NLP capabilities.

## Features ✨

1. **Tokenization**: Split text into tokens for further analysis.
2. **Part-of-Speech (POS) Tagging**: Assign grammatical categories to words.
3. **Named Entity Recognition (NER)**: Identify and classify named entities.
4. **Sentiment Analysis**: Determine sentiment (positive, negative, neutral) in text.
5. **Language Detection**: Identify the language of a given text.
6. **Text Classification**: Categorize text into predefined classes.
7. **Text Summarization**: Generate concise summaries of text.
8. **Keyword Extraction**: Identify important keywords or phrases.
9. **Spell Checking**: Identify and correct spelling errors.
10. **Stemming and Lemmatization**: Reduce words to their base form.
11. **Dependency Parsing**: Analyze the grammatical structure of sentences.

## Installation 🔧

You can install Okesa via npm:

```bash
npm install okesa
```

## Usage 🚀

Here's a simple example demonstrating how to tokenize text using Okesa:

```javascript
const { tokenize } = require('okesa');

const text = 'This is a sample sentence.';
const tokens = tokenize({ text, modelName: 'gpt-4' });

console.log(tokens);
```

---
## API Documentation 📚

Please note that the default model is `gpt-4o` if not specified. Okesa supports all Open AI models that are currently available.

### 1. `tokenize(options: { text: string, modelName?: string })`
Splits the given text into tokens.

**Parameters:**
- `options.text` (string): The text to tokenize.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { tokenize } from 'okesa';

const tokens = tokenize({ text: 'Hello world!', modelName: 'gpt-4' });
console.log(tokens); 
// Output: [{ token: 'Hello', start: 0, end: 5 }, { token: 'world', start: 6, end: 11 }]
```

---

### 2. `posTagging(options: { text: string, modelName?: string })`
Performs Part-of-Speech (POS) tagging on the given text.

**Parameters:**
- `options.text` (string): The text to process.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { posTagging } from 'okesa';

const posTags = await posTagging({ text: 'The quick brown fox.', modelName: 'gpt-4' });
console.log(posTags);
// Output: [{ word: 'The', pos: 'DT' }, { word: 'quick', pos: 'JJ' }, ...]
```

---

### 3. `ner(options: { text: string, modelName?: string })`
Performs Named Entity Recognition (NER) on the given text.

**Parameters:**
- `options.text` (string): The text to process.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { ner } from 'okesa';

const entities = await ner({ text: 'Barack Obama was born in Hawaii.', modelName: 'gpt-4' });
console.log(entities);
// Output: [{ entity: 'Barack Obama', label: 'PERSON', start: 0, end: 12 }, ...]
```

---

### 4. `sentimentAnalysis(options: { text: string, modelName?: string })`
Analyzes the sentiment of the text.

**Parameters:**
- `options.text` (string): The text to analyze.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { sentimentAnalysis } from 'okesa';

const sentiment = await sentimentAnalysis({ text: 'I love coding!', modelName: 'gpt-4' });
console.log(sentiment);
// Output: { sentiment: 'positive', confidence: 0.95 }
```

---

### 5. `languageDetection(options: { text: string, modelName?: string })`
Detects the language of the given text.

**Parameters:**
- `options.text` (string): The text to detect language for.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { languageDetection } from 'okesa';

const language = await languageDetection({ text: 'Bonjour tout le monde.', modelName: 'gpt-4' });
console.log(language);
// Output: { language: 'fr', confidence: 0.98 }
```

---

### 6. `textClassification(options: { text: string, modelName?: string })`
Classifies the text into predefined categories.

**Parameters:**
- `options.text` (string): The text to classify.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { textClassification } from 'okesa';

const classification = await textClassification({ text: 'The stock market is volatile.', modelName: 'gpt-4' });
console.log(classification);
// Output: { class: 'Finance', confidence: 0.92 }
```

---

### 7. `textSummarization(options: { text: string, modelName?: string })`
Generates a concise summary of the given text.

**Parameters:**
- `options.text` (string): The text to summarize.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { textSummarization } from 'okesa';

const summary = await textSummarization({ text: 'Artificial intelligence is transforming industries...', modelName: 'gpt-4' });
console.log(summary);
// Output: { summary: 'AI is transforming industries...' }
```

---

### 8. `keywordExtraction(options: { text: string, modelName?: string })`
Extracts keywords from the given text.

**Parameters:**
- `options.text` (string): The text to extract keywords from.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { keywordExtraction } from 'okesa';

const keywords = await keywordExtraction({ text: 'The quick brown fox jumps over the lazy dog.', modelName: 'gpt-4' });
console.log(keywords);
// Output: ['fox', 'dog']
```

---

### 9. `spellChecking(options: { text: string, modelName?: string })`
Identifies and corrects spelling errors in the given text.

**Parameters:**
- `options.text` (string): The text to spell-check.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { spellChecking } from 'okesa';

const corrected = await spellChecking({ text: 'Ths is a smple sentence.', modelName: 'gpt-4' });
console.log(corrected);
// Output: { corrected_text: 'This is a simple sentence.' }
```

---

### 10. `stemmingLemmatization(options: { text: string, modelName?: string })`
Performs stemming and lemmatization on the given text.

**Parameters:**
- `options.text` (string): The text to process.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { stemmingLemmatization } from 'okesa';

const stemsAndLemmas = await stemmingLemmatization({ text: 'The foxes are running quickly.', modelName: 'gpt-4' });
console.log(stemsAndLemmas);
// Output: [
//   { token: 'foxes', stem: 'fox', lemma: 'fox' },
//   { token: 'running', stem: 'run', lemma: 'run' },
//   { token: 'quickly', stem: 'quick', lemma: 'quick' }
// ]
```

---

### 11. `dependencyParsing(options: { text: string, modelName?: string })`
Analyzes the grammatical structure of the text and identifies dependency relationships.

**Parameters:**
- `options.text` (string): The text to parse.
- `options.modelName` (string, optional): The OpenAI model to use (default: `gpt-4o`).

**Example:**
```javascript
import { dependencyParsing } from 'okesa';

const dependencies = await dependencyParsing({ text: 'The cat sat on the mat.', modelName: 'gpt-4' });
console.log(dependencies);
// Output: [
//   { word: 'cat', dependency: 'nsubj', head: 1 },
//   { word: 'sat', dependency: 'ROOT', head: 0 },
//   { word: 'on', dependency: 'prep', head: 1 },
//   { word: 'mat', dependency: 'pobj', head: 2 }
// ]
```





---

## Contributing 🤝

Contributions are welcome! For bug reports, feature requests, or other inquiries, please contact us at [contact.adityapatange@gmail.com](mailto:contact.adityapatange@gmail.com).

---

> ✨ _"Okesa isn’t just about NLP—it’s about empowering everyone to unravel the text-based mysteries of the world." — AdiPat_

