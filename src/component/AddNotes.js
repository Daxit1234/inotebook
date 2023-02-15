import React, { useState ,useContext} from 'react'
import NoteContext from '../context/Notecontext'
function AddNotes() {
    const context=useContext(NoteContext)
    const {addnotes}=context
    const [note,setNote]=useState({title:"",description:"",tag:""})
    const handleclick=(e)=>{
        e.preventDefault()
        addnotes(note.title,note.description,note.tag)
    }
    const handleonchange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className='container'>
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' id="title" aria-describedby="emailHelp" onChange={handleonchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" name='tag' className="form-control" id="tag" onChange={handleonchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name='description' className="form-control" id="description" onChange={handleonchange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNotes
