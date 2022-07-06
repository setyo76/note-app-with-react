import React from "react";

function NoteSearch({ onSearch }) {
  return (
    <div className="input">
      <input autoCorrect="off" className="input-data fix" type="text" placeholder="Search Note" onChange={(event) => onSearch(event.target.value)} />
    </div>
  );
}

export default NoteSearch;