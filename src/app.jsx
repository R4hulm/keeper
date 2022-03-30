import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./components/notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(noteItem => <Note 
                key = {noteItem.key}
                title = {noteItem.title}
                content = {noteItem.content}
                />
            )}

            <Footer />
        </div>
    );
}
export default App;