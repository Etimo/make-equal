function mangleChildName(char) {
  return 'c/' + char.toLowerCase();
}

export class AnnotatedTrie {
  getTag() {
    return this.tag;
  }

  getDirectChild(char) {
    return this[mangleChildName(char)];
  }

  getOrAddDirectChild(char) {
    if (this[mangleChildName(char)] === undefined) {
      this[mangleChildName(char)] = new AnnotatedTrie();
    }
    return this[mangleChildName(char)];
  }

  // pos should be left undefined when used
  add(word, tag, pos) {
    if (pos === undefined) {
      pos = 0;
    }

    if (word === '') {
      throw new Error("You can't add empty words to an AnnotatedTrie!");
    }

    let curr = this;
    while (pos < word.length) {
      curr = curr.getOrAddDirectChild(word[pos]);
      pos++;
    }
    curr.tag = tag;
  }

  // text: the haystack to search in
  // posStart: the position to start at (optional)
  // isWordLetter: regex for whether a character can be part of a word (must be false for the characters before and after a match) (optional)
  // returns: {
  //   posStart: the index where the match begins,
  //   posEnd: the index after the match ends,
  //   tag: the tag,
  // }
  findNext(text, posStart, isWordLetter) {
    if (posStart === undefined) {
      posStart = 0;
    }
    if (isWordLetter === undefined) {
      isWordLetter = /\w/;
    }

    let curr = this;
    let pos = posStart;
    while (posStart < text.length) {
      if (curr === undefined) {
        do {
          posStart++;
        } while (
          text[posStart - 1] !== undefined &&
          isWordLetter.test(text[posStart - 1])
        );
        pos = posStart;
        curr = this;
      } else if (
        curr.tag !== undefined &&
        (text[pos] === undefined || !isWordLetter.test(text[pos]))
      ) {
        return {
          posStart: posStart,
          posEnd: pos,
          tag: curr.tag
        };
      } else {
        curr = curr.getDirectChild(text[pos]);
        pos++;
      }
    }

    return undefined;
  }

  findAll(text) {
    let pos = 0;
    let matches = [];
    while (true) {
      let match = this.findNext(text, pos);
      if (match === undefined) {
        return matches;
      } else {
        matches.push(match);
        pos = match.posEnd;
      }
    }
  }

  // returns [noMatch: string | match: { word: string, tag: tag }]
  splitMatches(text) {
    let matches = this.findAll(text);
    let pieces = [];
    let pos = 0;
    for (let match of matches) {
      if (pos !== match.posStart) {
        pieces.push(text.substring(pos, match.posStart));
      }
      pieces.push({
        word: text.substring(match.posStart, match.posEnd),
        tag: match.tag
      });
      pos = match.posEnd;
    }
    if (pos !== text.length) {
      pieces.push(text.substring(pos));
    }
    return pieces;
  }
}
