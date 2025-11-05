import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LlmService } from '../../core/llm/llm.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  input = '';
  output = signal('');
  darkMode = false;

  constructor(public llm: LlmService) {}

  async send() {
    const system = 'Você é um assistente para desenvolvedores Angular.';
    const resp = await this.llm.respond({
      system,
      messages: [{ role: 'user', content: this.input }],
    });
    this.output.set(resp);
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
  }

  toggleImage(){
    this.darkMode = !this.darkMode;
  }
}
