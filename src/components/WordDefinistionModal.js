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
         <a onClick={this.show('small')}>{this.props.word}</a>
         <Modal size={size} open={open} onClose={this.close}>
           <Modal.Header>
             {this.props.word}
           </Modal.Header>
           <Modal.Content>
             <p>{this.props.wordDefinition}</p>
           </Modal.Content>
           <Modal.Actions>

           </Modal.Actions>
         </Modal>
       </div>
    )
  }
}


export default WordDefinitionModal;
