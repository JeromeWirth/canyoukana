import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Example, Section } from '../../../../models';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ExampleTable } from '../example-table/example-table';
import { SectionInfo } from '../section-info/section-info';
import { PracticeModal } from '../../../practice/practice-modal/practice-modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lesson-section',
  imports: [MatCardModule, MatIconModule, ExampleTable, SectionInfo],
  templateUrl: './lesson-section.html',
  styleUrl: './lesson-section.scss',
})
export class LessonSection {
  @Input({ required: true }) section!: Section;
  @Output() sectionCompleted = new EventEmitter<string>();

  completedSections = new Set<string>();
  readonly dialog = inject(MatDialog);

  toggleSectionComplete(sectionId: string) {
    if (this.completedSections.has(sectionId)) {
      this.completedSections.delete(sectionId);
    } else {
      this.completedSections.add(sectionId);
    }
    this.sectionCompleted.emit(sectionId);
  }

  isSectionCompleted(sectionId: string): boolean {
    return this.completedSections.has(sectionId);
  }

  openPractice(examples: Example[]): void {
    const practiceRef = this.dialog.open(PracticeModal, {
      data: {
        examples: examples,
      },
    });

    practiceRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
