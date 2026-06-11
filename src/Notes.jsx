import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { NotesContext } from "./context/NotesContext"

function Notes() {

    const navigate = useNavigate()
    const { notes } = useContext(NotesContext)

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
                <div key={index} className="flex flex-col md:flex-row border border-gray-400 rounded-lg m-4 p-4 
                    cursor-pointer justify-between">
                    <div>
                        <span className="font-bold text-lg">{note.title}</span><br />
                        <span className="text-gray-400">
                            {note.content}
                        </span>
                    </div>
                    <p className="text-gray-500">
                        {note.date.toLocaleString()}</p>
                </div>
            ))}
                
                {/* <div className="flex flex-col md:flex-row border border-gray-400 rounded-lg m-4 p-4 
                    cursor-pointer justify-between ">
                    <div>
                        <span className="font-bold text-lg">Shopping List</span><br />
                        <span className="text-gray-400">
                            Milk, Bread, Eggs, Fruits, Vegetables, Rice, Dal
                        </span>
                    </div>
                    <p className="text-gray-500">
                        June 9, 2026 . 10:30 PM</p>
                </div> */}
            
        </div>
            
        </>
    )
}

export default Notes