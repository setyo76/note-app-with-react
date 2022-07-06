import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
      super(props);
    
      // inisialisasi state
      this.state = {
        title: '',
        body: '',
        max:25,
      }
    
      this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
      this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onNameChangeEventHandler(event) {
      this.setState((prevState) => {
        while (event.target.value.length < this.state.max + 1) {
        return {
          ...prevState,
          title: event.target.value,
        };
      }
      });
    }
    
    onTagChangeEventHandler(event) {
      this.setState((prevState) => {
        return {
          ...prevState,
          body: event.target.value,
        }
      });
    }
    
    onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNote(this.state);
    }
 
 render() {
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
      <div class="row justify-content-between">
          <div class="col-4">
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.onNameChangeEventHandler} required/>
          </div>
          <div class="col-4 pt-3">
          <p><em>(Character Max : {this.state.max-this.state.title.length})</em></p>
          </div>
        </div>
       <input type="text" placeholder="Body" value={this.state.body} onChange={this.onTagChangeEventHandler} />
       <button type="submit" class="btn btn-primary"><span class="fa fa-plus pe-2"></span></button>
     </form>
   )
 }
}
 
export default NoteInput;