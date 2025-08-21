import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Info } from '../../../../models';
import { ExampleTable } from '../example-table/example-table';

@Component({
  selector: 'app-section-info',
  imports: [CommonModule, MatCardModule, MatIconModule, ExampleTable],
  templateUrl: './section-info.html',
  styleUrl: './section-info.scss',
})
export class SectionInfo {
  @Input({ required: true }) info!: Info;
}
