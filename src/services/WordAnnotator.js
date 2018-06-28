import { AnnotatedTrie } from './AnnotatedTrie';
import axios from 'axios';

export class WordAnnotator {
  getWordList() {
    if (this._request === undefined) {
      this._request = axios
        .get('https://analytics.makeequal.se/api/words/sv')
        .then(response => response.data.data);
    }
    return this._request;
  }

  getWordTrie() {
    if (this._wordTrie === undefined) {
      this._wordTrie = this.getWordList().then(words => {
        let trie = new AnnotatedTrie();
        for (let word of words) {
          for (let match of word.matches) {
            trie.add(match, word);
          }
        }
        return trie;
      });
    }
    return this._wordTrie;
  }

  // returns Promise<[string | { word: string, tag: WordInfo }]>, where WordInfo is defined by the MakeEqual Analytics API
  findAllWords(text) {
    return this.getWordTrie().then(trie => trie.splitMatches(text));
  }
}
