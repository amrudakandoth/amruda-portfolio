import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
})
export class Chatbot {
  messages: { text: string; sender: 'user' | 'bot' }[] = [];
  userInput = '';

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({
        text: this.userInput,
        sender: 'user'
      });
      this.userInput = '';
    }
  }
}
