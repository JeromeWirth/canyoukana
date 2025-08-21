import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Example } from '../../../../models';

@Component({
  selector: 'app-example-table',
  imports: [CommonModule, MatTableModule],
  templateUrl: './example-table.html',
  styleUrl: './example-table.scss',
})
export class ExampleTable {
  @Input({ required: true }) examples: Example[] = [];

  displayedColumns: string[] = ['kanji', 'kana', 'romaji', 'english'];

  ngAfterViewInit() {
    // Add data-label attributes for mobile view
    const cells = document.querySelectorAll('.mat-column-kanji');
    cells.forEach((cell) => cell.setAttribute('data-label', '漢字'));
    // Repeat for other columns...
  }
}
