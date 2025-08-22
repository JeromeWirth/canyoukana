import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.html',
  styleUrl: './practice.scss',
})
export class Practice {
  openPractice(module: string) {
    if (module === 'numbers') {
      // In the next step, route or open the numbers practice
      // For now, just log or show a placeholder
      alert('Numbers practice coming soon!');
    } else {
      alert(
        `${
          module.charAt(0).toUpperCase() + module.slice(1)
        } practice coming soon!`
      );
    }
  }
}
