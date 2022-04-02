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
    
    function deleteNote(id) {
        setNotesList(prevNotes => {
            return(
                prevNotes.filter((note,index) => index !== id)
            )
        })
    }
    
    
   return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />

            {notesList.map((note,index) => <Note 
                key = {index}
                id = {index}
                title = {note.title}
                content = {note.content}
                onRemove = {deleteNote}
                />
            )}

            <Footer />
        </div>
    );
}
export default App;