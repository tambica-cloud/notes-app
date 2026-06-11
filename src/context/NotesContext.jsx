import { createContext, useState } from "react";

export const NotesContext = createContext()

function NotesProvider({ children }) {
    const [notes, setNotes] = useState([])
    console.log(notes)


    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesProvider