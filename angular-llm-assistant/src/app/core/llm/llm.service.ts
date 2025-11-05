import { Injectable, signal } from "@angular/core";
import { environment } from "../../../environment/environment";
export type ChatMsg = {
  role: "user" | "assistant" | "system";
  content: string;
};

@Injectable({ providedIn: "root" })

export class LlmService {
  loading = signal(false);
  private apiUrl = environment.openaiUrl;
  private apiKey = environment.openaiKey;
  async respond(opts: { system: string; messages: ChatMsg[]; model?: string }) {
    this.loading.set(true);
    try {
      const r = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: opts.model || "gpt-4o-mini",
          input: [{ role: "system", content: opts.system }, ...opts.messages],
          temperature: 0.3,
        }),
      });
      const json = await r.json();
      const text =
        json.output_text ?? json.output?.[0]?.content?.[0]?.text ?? "";
      return text;
    } finally {
      this.loading.set(false);
    }
  }
}
