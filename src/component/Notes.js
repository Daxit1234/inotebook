
import React,{useContext} from 'react'
import NoteContext from '../context/Notecontext'
import Noteitem from './Noteitem'

function Notes() {
    const context=useContext(NoteContext)
    const {state,setstate}=context
    return (
    <div className='row'>
        <h1>Your Notes</h1>
       {state.map((note)=>{
        return <Noteitem note={note}/>
       })}
    </div>
  )
}

export default Notes
