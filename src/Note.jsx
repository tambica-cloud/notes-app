import { useState } from "react"

function Note() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [note, setNote] = useState({})

    const date = new Date()

    const saveNote = () => {
        setNote({
            ...note,
            title: title,
            content: content,
            date: date
            })
    }

    return (
        <>
        
        <div className="flex flex-col max-w-3xl mx-auto gap-4 border
        border-gray-400 rounded-lg p-6 m-4 shadow-md">
            <button className="text-blue-500 font-medium self-start">
                ← Back to Notes
            </button>
            
            <input placeholder="Title" value={title} 
                onChange={(e) => setTitle(e.target.value)}  
                className="font-bold text-4xl p-4" />
            <hr className="border-gray-300"/>
            
            <textarea value={content}
                onChange={(e) => setContent(e.target.value)} 
                className="p-4 text-gray-700 leading-relaxed" />
            
            <button onClick={saveNote}
             className="bg-blue-500 rounded w-20 text-white p-1">Save</button>
            <hr className="border-gray-300"/>
            <p className="text-gray-500">
                {date.toLocaleString()}
            </p>
            <div className="flex gap-3">
                <button className="bg-blue-500 rounded w-20 text-white p-1">
                    ✏️ Edit
                </button>
                <button className="bg-red-500 rounded w-30 text-white p-2">
                    🗑️ Delete
                </button>
            </div>

        </div>
        </>
    )
}

export default Note