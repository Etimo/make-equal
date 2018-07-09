import { AnnotatedTrie } from './AnnotatedTrie';

describe('findNext', () => {
  it('should return undefined when there is no match', () => {
    let trie = new AnnotatedTrie();
    trie.add('word', 'TAG');
    expect(trie.findNext('nothing')).toEqual(undefined);
  });

  it('should find matches against the whole input string', () => {
    let trie = new AnnotatedTrie();
    trie.add('word', 'TAG');
    expect(trie.findNext('word')).toEqual({
      posStart: 0,
      posEnd: 4,
      tag: 'TAG'
    });
  });

  it('should start searching at the specified index', () => {
    let trie = new AnnotatedTrie();
    trie.add('word', 'TAG');
    trie.add('ord', 'AG');
    expect(trie.findNext('word', 1)).toEqual({
      posStart: 1,
      posEnd: 4,
      tag: 'AG'
    });
  });

  it('should find input in the middle of the string', () => {
    let trie = new AnnotatedTrie();
    trie.add('hat', 'rabbit');
    trie.add('herring', 'red');
    expect(
      trie.findNext('Have a look in my hat, can you find the magic word?')
    ).toEqual({
      posStart: 18,
      posEnd: 21,
      tag: 'rabbit'
    });
    expect(
      trie.findNext('Have you ever seen a herring as blue as this?')
    ).toEqual({
      posStart: 21,
      posEnd: 28,
      tag: 'red'
    });
  });

  it('should respect that Scunthorpe is not an expletive', () => {
    let expletives = new AnnotatedTrie();
    expletives.add('thorp', true);
    expect(
      expletives.findNext('I hear Scunthorpe is a pretty nice place to live!')
    ).toEqual(undefined);
  });

  it('not crash when ending in the middle of a word', () => {
    let words = new AnnotatedTrie();
    words.add('experimental', true);
    expect(words.findNext('experiment')).toEqual(undefined);
  });
});

describe('findAll', () => {
  it('should be able to find all matches in a sentence', () => {
    let words = new AnnotatedTrie();
    words.add('very', true);
    words.add('secret', true);
    words.add('repeat', true);
    expect(
      words.findAll(
        "Did you all get the secret memo? I DON'T WANT A REPEAT OF LAST TIME!"
      )
    ).toEqual([
      {
        posStart: 20,
        posEnd: 26,
        tag: true
      },
      {
        posStart: 48,
        posEnd: 54,
        tag: true
      }
    ]);
  });
});

describe('splitMatches', () => {
  it('should return both matching and mismatching segments', () => {
    let trie = new AnnotatedTrie();
    trie.add('expect', 'demand');
    trie.add('job', 'task');
    expect(
      trie.splitMatches('I expect this to be an easy job for you!')
    ).toEqual([
      'I ',
      { word: 'expect', tag: 'demand' },
      ' this to be an easy ',
      { word: 'job', tag: 'task' },
      ' for you!'
    ]);
  });
  it('should not print empty noMatch segments', () => {
    let trie = new AnnotatedTrie();
    trie.add('that', true);
    trie.add('easy', true);
    expect(trie.splitMatches('That was easy')).toEqual([
      { word: 'That', tag: true },
      ' was ',
      { word: 'easy', tag: true }
    ]);
  });
});
