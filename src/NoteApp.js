import React from 'react';
import NoteList from './components/NoteList';
import { getData } from './utils/data';
import NoteInput from './components/NoteInput';
import NoteSearch from "./components/NoteSearch";
 
class NoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: getData(),
      }
    
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onAddNoteHandler=this.onAddNoteHandler.bind(this);
      this.onSearch = this.onSearch.bind(this);
    }
    
    onDeleteHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title,
              body,
              imageUrl: '/images/default.png',
              archived:false,
              createdAt: +new Date(),
            }
          ],
          noteBackup: [
            ...prevState.notes,
            {
              id: +new Date(),
              title,
              body,
              archived: false,
              createdAt: +new Date(),
            },
          ],
        }
      });
    }

    onSearch(title) {
      this.setState((prev) => {
        return {
          ...prev,
          note: this.state.notes,
        };
      });
      this.setState((prev) => {
        return {
          ...prev,
          note: prev.note.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())),
        };
      });
    }
    
    render() {
      return (
        <div className="note-app">
          <h1 className='text-center p-3 mb-2 bg-warning text-dark'>My Note App</h1>
          <div class="row justify-content-between p-4">
            <div class="col-4">
            <h2>Add Note</h2>
            </div>
            <div class="col-4">
            <NoteSearch onSearch={this.onSearch} />
            </div>
          </div> 
          <NoteInput addNote={this.onAddNoteHandler}/>
          <h2>Note List</h2>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        </div>
      );
    }
   }
    
   export default NoteApp;