import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";


function App() {
    return (
        <div>
            <Header />
            <Note className="note" />
            <Footer />
        </div>
    );
}
export default App;