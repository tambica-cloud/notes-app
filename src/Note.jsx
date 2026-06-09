function Note() {
    return (
        <>
        
        <div className="flex flex-col max-w-3xl mx-auto gap-4 border
        border-gray-400 rounded-lg p-6 m-4 shadow-md">
            <button className="text-blue-500 font-medium self-start">
                ← Back to Notes
            </button>
            
            <h1 className="font-bold text-4xl p-4">React Learning</h1>
            <hr className="border-gray-300"/>
            <p className="p-4 text-gray-700 leading-relaxed">
                Learn useState <br />
                Learn useEffect<br />
                Practice React Projects
            </p>
            <hr className="border-gray-300"/>
            <p className="text-gray-500">
                Created: June 9, 2026 . 10:30 AM
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