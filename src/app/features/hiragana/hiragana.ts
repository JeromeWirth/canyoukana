import { Component, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import * as wanakana from 'wanakana';
import { KanaService } from '../../services/kana.service';
import { KanaDetails } from '../../models';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hiragana',
  imports: [AsyncPipe],
  templateUrl: './hiragana.html',
  styleUrl: './hiragana.scss',
})
export class Hiragana {
  // Standard Hiragana table (rows: vowels, k, s, t, n; columns: a, i, u, e, o)
  hiraganaTable: (string | null)[][] = [
    ['あ', 'い', 'う', 'え', 'お'], // Vowels
    ['か', 'き', 'く', 'け', 'こ'], // K
    ['さ', 'し', 'す', 'せ', 'そ'], // S
    ['た', 'ち', 'つ', 'て', 'と'], // T
    ['な', 'に', 'ぬ', 'ね', 'の'], // N
    ['は', 'ひ', 'ふ', 'へ', 'ほ'], // H
    ['ま', 'み', 'む', 'め', 'も'], // M
    ['ら', 'り', 'る', 'れ', 'ろ'], // R
    ['や', null, 'ゆ', null, 'よ'], // Y
    ['わ', null, null, null, 'を'], // W
    [null, null, 'ん', null, null], // N (standalone)
  ];

  private kanaService = inject(KanaService);
  selectedKana = signal<string | null>(null);
  romaji = signal<string>('');
  details$ = signal<Observable<KanaDetails | { error: string }> | null>(null);

  selectKana(kana: string | null) {
    if (kana) {
      this.selectedKana.set(kana);
      this.romaji.set(wanakana.toRomaji(kana));
      this.details$.set(this.kanaService.fetchKanaDetails(kana));
    }
  }

  isError(
    details: KanaDetails | { error: string }
  ): details is { error: string } {
    return 'error' in details;
  }
}
