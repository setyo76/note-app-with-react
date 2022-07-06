import React from 'react';
 
function NoteItemBody({ title, body, archived, createAt }) {
 return (
   <div className="note-item__body">
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__username">{body}</p>
   </div>
 );
}
 
export default NoteItemBody;