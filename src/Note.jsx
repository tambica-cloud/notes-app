import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NotesContext } from "./context/NotesContext"

function Note() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const { notes, setNotes } = useContext(NotesContext)
    const { id } = useParams()
    const selectedNote = notes[id]
    
    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title)
            setContent(selectedNote.content)
            
        }
    }, [selectedNote])

    const date = new Date()

    const saveNote = () => {

        if (selectedNote) {
            selectedNote.title = title
            selectedNote.content = content
            selectedNote.date = date
        }
        else {
            setNotes([...notes,
            {
                title: title,
                content: content,
                date: date
            }
         ])
        }
        
        navigate('/')
    }

    const deleteNote = (id) => {
        setNotes(
                notes.filter((item, index) =>
                 index !== Number(id)
                          
            )
        )        
        navigate('/')
    }

    return (
        <>
        
        <div className="flex flex-col max-w-3xl mx-auto gap-4 border
        border-gray-400 rounded-lg p-6 m-4 shadow-md">
            <button onClick={() => navigate('/')}
             className="text-blue-500 font-medium self-start">
                ← Back to Notes
            </button>
            
            <input placeholder="Title" value={title} 
                onChange={(e) => setTitle(e.target.value)}  
                className="font-bold text-4xl p-4" />
            <hr className="border-gray-300"/>
            
            <textarea placeholder="Content" value={content}
                onChange={(e) => setContent(e.target.value)} 
                className="p-4 text-gray-700 leading-relaxed" />
            
            <button onClick={saveNote}
             className="bg-blue-500 rounded w-20 text-white p-1">Save</button>
            <hr className="border-gray-300"/>
            <p className="text-gray-500">
                {date.toLocaleString()}
            </p>
            {selectedNote && 
                <div className="flex gap-3">
                    {/* <button className="bg-blue-500 rounded w-20 text-white p-1">
                        ✏️ Edit
                    </button> */}
                    <button onClick={() => deleteNote(id)} className="bg-red-500 rounded w-30 text-white p-2">
                        🗑️ Delete
                    </button>
                </div>
            }

        </div>
        </>
    )
}

export default Note