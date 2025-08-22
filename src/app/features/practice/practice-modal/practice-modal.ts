import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Example, Question } from '../../../models';

@Component({
  selector: 'app-practice-modal',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  templateUrl: './practice-modal.html',
  styleUrl: './practice-modal.scss',
})
export class PracticeModal {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<PracticeModal>);
  private readonly data: { examples: Example[] } = inject(MAT_DIALOG_DATA);

  readonly form: FormGroup = this.fb.group({
    answer: ['', Validators.required],
  });

  private readonly shuffledExamples = this.data.examples
    .slice()
    .sort(() => Math.random() - 0.5);

  readonly currentIndex = signal(0);
  readonly correctCount = signal(0);
  readonly feedback = signal<'correct' | 'incorrect' | null>(null);

  readonly total = computed(() => this.shuffledExamples.length);
  readonly progress = computed(
    () => (this.currentIndex() / this.total()) * 100
  );
  readonly isQuizActive = computed(() => this.currentIndex() < this.total());
  readonly percentage = computed(() =>
    Math.round((this.correctCount() / this.total()) * 100)
  );
  readonly rating = computed(() => Math.floor(this.percentage() / 20));

  readonly currentQuestion = computed<Question>(() => {
    const example = this.shuffledExamples[this.currentIndex()];
    const mode = Math.random() > 0.5 ? 'english-to-romaji' : 'kana-to-english';
    return {
      mode,
      questionText:
        mode === 'english-to-romaji' ? example.english : example.kana,
      expectedAnswer:
        mode === 'english-to-romaji' ? example.romaji : example.english,
    };
  });

  submitAnswer(): void {
    const userAnswer = this.form.value.answer.trim().toLowerCase();
    const expected = this.currentQuestion().expectedAnswer.trim().toLowerCase();
    const isCorrect = userAnswer === expected;

    this.feedback.set(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      this.correctCount.update((count) => count + 1);
    }
  }

  nextQuestion(): void {
    this.feedback.set(null);
    this.form.reset();
    this.currentIndex.update((index) => index + 1);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
