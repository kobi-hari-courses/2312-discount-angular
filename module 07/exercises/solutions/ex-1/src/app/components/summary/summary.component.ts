import { Component, inject } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  private readonly quizService = inject(QuizService);

  questions$ = this.quizService.getQuestionsCount();
  correct$ = this.quizService.getCorrectCount();
  score$ = this.quizService.getScore();

}
