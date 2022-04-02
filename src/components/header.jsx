import React from "react";
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';


function Header() {
    return(
        <header>
            <h1>
            <span className="note-icon"><EventNoteRoundedIcon sx={{ fontSize: 30 }} /></span>
            &nbsp;Keeper
            </h1>
        </header>
    )
}

export default Header;