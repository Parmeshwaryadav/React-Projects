import React from "react";
import ReactMarkdown from "react-markdown";

export default function Sidebar(props) {
  // Destructure props for cleaner access
  const { notes, currentNote, setCurrentNoteId } = props;

  const noteElements = notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${note.id === currentNote.id ? "selected-note" : ""}`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">
          Note {index + 1}
          {/* Display a short preview of the note's content */}
          <ReactMarkdown source={note.body.slice(0, 30)} />
        </h4>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
