import AddNotes from './AddNotes'
import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/Notecontext'
import Noteitem from './Noteitem'
import { useNavigate } from 'react-router-dom'

function Notes() {
  const context = useContext(NoteContext)
  const { notes, getnotes,editnotes } = context
  const history=useNavigate()

  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log(localStorage.getItem("token"))
      getnotes()
    }
    else{
      history("/login",{push:true})
    }
    //eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refclose = useRef(null)
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" })
 
  const updateNote = (currentNote) => {
    ref.current.click();
    console.log(currentNote)
    setNote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }
  const handleclick = (e) => {
    editnotes(note.id,note.etitle,note.edescription,note.etag)
    refclose.current.click();
  }
  const handleonchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNotes />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={handleonchange} minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription"  value={note.edescription} onChange={handleonchange} minLength={5} required />
                </div> 
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={handleonchange} minLength={5} required/>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleclick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row container'>
        <h1>Your Notes</h1>
        {notes.length ===0 && "notes note available"}
        {notes.map((note) => {
          return <Noteitem key={note._id} updatenote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}



export default Notes
