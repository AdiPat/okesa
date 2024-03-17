type LLMRunner = (seed: string, prompt: string) => Promise<string | null>;

export { LLMRunner };
