import OpenAI from "openai";
import { OkesaInitParameters } from "../types";

class Makakasho {
  private brain: OpenAI;

  constructor({ okesaApiKey }: OkesaInitParameters) {
    this.brain = new OpenAI({ apiKey: okesaApiKey });
  }
}

export { Makakasho };
