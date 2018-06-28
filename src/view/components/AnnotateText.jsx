import { WordAnnotator } from '../../services/WordAnnotator';
import React, { PureComponent } from 'react';
import WordDefinitionModal from './WordDefinistionModal';

export class AnnotateText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cancelKey: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Re-render without annotations until the annotations are downloaded
    if (state.lastText !== props.text) {
      return {
        content: [props.text],
        lastText: props.text,
        cancelKey: state.cancelKey + 1
      };
    } else {
      return null;
    }
  }

  updateAnnotations() {
    let cancelKey = this.state.cancelKey;
    if (this.state.lastAppliedCancelKey !== cancelKey) {
      this.setState({
        lastAppliedCancelKey: this.state.cancelKey
      });
      this.props.annotator.findAllWords(this.props.text).then(
        segments => {
          // Cancel if the content has changed since
          if (this.state.cancelKey === cancelKey) {
            this.setState({
              content: segments
            });
          }
        },
        err => {
          // Just keep showing the user the non-annotated version
          console.error(err);
        }
      );
    }
  }

  componentDidMount() {
    this.updateAnnotations();
  }

  componentDidUpdate() {
    this.updateAnnotations();
  }

  render() {
    let segs = this.state.content.map((segment, index) => {
      if (typeof segment === 'string') {
        return segment;
      } else {
        return (
          <WordDefinitionModal
            key={index}
            word={segment.word}
            wordTitle={segment.tag.title}
            wordDefinition={segment.tag.text}
          />
        );
      }
    });
    return <p>{segs}</p>;
  }
}
