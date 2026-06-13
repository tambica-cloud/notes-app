import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { NotesContext } from "./context/NotesContext"

function Notes() {

    const navigate = useNavigate()
    const { notes } = useContext(NotesContext)

    const displayNote = (index) => {
         navigate(`/note/${index}`)
    }

    return (
        <>
        <div className="flex flex-col border border-gray-400 rounded-lg 
            p-6 m-4 shadow-md max-w-3xl mx-auto">
            <div className="flex gap-4 justify-between items-center mb-6">
                <h1 className="text-3xl font-bold ">My Notes</h1>
                <button onClick={() => navigate('/note/new')}
                 className="bg-blue-500 rounded px-4 py-2 text-white text-xl ">
                    + Add Note</button>
            </div>
            {notes.map((note, index) => (
                <div onClick={() => displayNote(index)} key={index} className="flex flex-col md:flex-row border border-gray-400 rounded-lg m-4 p-4 
                    cursor-pointer justify-between hover:bg-gray-50">
                    <div>
                        <span className="font-bold text-lg">{note.title}</span><br />
                        <span className="text-gray-400">
                            {note.content}
                        </span>
                    </div>
                    <p className="text-gray-500">
                        {new Date(note.date).toLocaleString()}</p>
                </div>
            ))}
            
        </div>
            
        </>
    )
}

export default Notes