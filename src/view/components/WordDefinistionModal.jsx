import React, {Component} from 'react';
import {Modal, Button} from 'semantic-ui-react';

class WordDefinitionModal extends Component {
  state = {open: false};
  show = size => () => this.setState({size, open: true});
  close = () => this.setState({open: false});

  render() {
    const {open, size} = this.state;
    return (
      <div>
        <a className={"make-equal-purple"} onClick={this.show('small')}>{this.props.word}</a>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            <h1 className={"make-equal-purple"}>
              {this.props.word}
            </h1>
          </Modal.Header>
          <Modal.Content>
            <p className={"word-modal-text-thing"}>Defenition: </p>
            <p className={"word-modal-text"}>{this.props.wordDefinition}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button className={"form-button"} content={"Stäng"} onClick={()=>this.close()} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}


export default WordDefinitionModal;
