import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from '../../../../models';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ExampleTable } from '../example-table/example-table';

@Component({
  selector: 'app-lesson-section',
  imports: [MatCardModule, MatIconModule, ExampleTable],
  templateUrl: './lesson-section.html',
  styleUrl: './lesson-section.scss',
})
export class LessonSection {
  @Input({ required: true }) section!: Section;
  @Output() sectionCompleted = new EventEmitter<string>();

  completedSections = new Set<string>();

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
}
