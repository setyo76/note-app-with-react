import React from 'react';
 
function NoteItemImage({ imageUrl }) {
 return (
   <div className="note-item__image">
     <img src={imageUrl} alt="note avatar"/>
   </div>
 );
}
 
export default NoteItemImage;