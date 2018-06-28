import { WordAnnotator } from '../../services/WordAnnotator';
import { PureComponent } from 'react';

export class AnnotateText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cancelKey: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Re-render without annotations until the annotations are downloaded
    console.log('DERIVING');
    return {
      content: [props.text],
      lastText: props.text,
      cancelKey: state.cancelKey + (props.text === state.lastText ? 0 : 1)
    };
  }

  updateAnnotations() {
    let cancelKey = this.state.cancelKey;
    this.props.annotator.findAllWords(this.props.text).then(
      matches => {
        // Cancel if the content has changed since
        if (this.state.cancelKey === cancelKey) {
          this.setState({
            content: matches
          });
        }
      },
      err => {
        // Just keep showing the user the non-annotated version
        console.error(err);
      }
    );
  }

  componentDidMount() {
    this.updateAnnotations();
  }

  componentDidUpdate() {
    this.updateAnnotations();
  }

  render() {
    console.log(this);
    return 'hi';
    return this.state.content;
  }
}
