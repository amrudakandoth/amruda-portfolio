import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Chatbot {

  async getResponse(message: string): Promise<string> {
    // Replace with OpenAI API call later
    if (message.toLowerCase().includes('experience')) {
      return "I have 5 years of experience in .NET and Angular enterprise systems.";
    }
    return "Thanks for your question! Feel free to ask about my projects.";
  }
}
