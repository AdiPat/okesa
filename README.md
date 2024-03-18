# Okesa 🪐

Okesa is a general-purpose, powerful and versatile NLP (Natural Language Processing) library for Node.js, designed to provide a wide range of NLP features for text analysis and processing.

**NOTE: THIS MODULE IS STILL UNDER DEVELOPMENT AND IS NOT READY TO USE YET.**

## Background

The name "Okesa" is derived from the Japanese word for "priest’s outer robe, a rectangle sewn most often of seven panels," reflecting the library's versatility and ability to handle complex text processing tasks with ease, much like the intricate stitching of a traditional robe. Okesa embodies the Zen tradition of simplicity and precision, mirroring the library's approach to NLP. Okesa aims to make advanced text analysis accessible to developers of all levels, offering intuitive APIs and comprehensive documentation. Whether you're building chatbots, analyzing customer feedback, or extracting insights from large datasets, Okesa provides the tools you need to enhance your applications with powerful NLP capabilities.

## Features

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
11. **Dependency Parsing**: Analyze grammatical structure of sentences.

## Installation

You can install Okesa via npm:

```bash
npm install okesa
```

## Usage

Here's a simple example demonstrating how to tokenize text using Okesa:

```javascript
const { tokenize } = require('okesa');

const text = 'This is a sample sentence.';
const tokens = tokenize(text);

console.log(tokens);
```

For more details and advanced usage, check out the [documentation](https://okesa-docs.com).

## Contributing

Contributions are welcome! For bug reports, feature requests, or other inquiries, please contact us at [contact.adityapatange@gmail.com](mailto:contact.adityapatange@gmail.com).