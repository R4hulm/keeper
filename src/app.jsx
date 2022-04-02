import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/createArea";

function App() {
    const [notesList,setNotesList] = useState([]);

    function addNote(note) {
        setNotesList(prevNote => [...prevNote,note])
        }
    
   return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />

            {notesList.map(note => <Note 
                key = {note.key}
                title = {note.title}
                content = {note.content}
                />
            )}

            <Footer />
        </div>
    );
}
export default App;