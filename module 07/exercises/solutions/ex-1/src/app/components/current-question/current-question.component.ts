import { Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-question.component.html',
  styleUrl: './current-question.component.css'
})
export class CurrentQuestionComponent {
  private readonly quizService = inject(QuizService);
  num1$ = this.quizService.num1$
  num2$ = this.quizService.num2$

  submit(value: number) {
    console.log('component submit', value);
    this.quizService.submit(value);
  }

}
