import AddNotes from './AddNotes'
import React, { useContext } from 'react'
import NoteContext from '../context/Notecontext'
import Noteitem from './Noteitem'

function Notes() {
  const context = useContext(NoteContext)
  const { notes, addnotes } = context
  return (
    <>
      <AddNotes />
      <div className='row'>
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Noteitem key={note.id} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
