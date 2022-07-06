import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteItemImage from './NoteItemImage';
import DeleteButton from './DeleteButton';
 
function NoteItem({ imageUrl, title, body, archived, createAt, id, onDelete }) {
 return (
   <div className="note-item">
     <NoteItemImage imageUrl={imageUrl} />
     <NoteItemBody title={title} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />   
   </div>
 );
}
 
export default NoteItem;