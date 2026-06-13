import Note from "./Note"
import Notes from "./Notes"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/note/new' element={<Note />} />
        <Route path='/note/:id' element={<Note />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
