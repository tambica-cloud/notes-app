import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext()

function NotesProvider({ children }) {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes")
        if (savedNotes) {
            return JSON.parse(savedNotes)
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesProvider