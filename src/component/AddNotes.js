import React, { useState ,useContext} from 'react'
import NoteContext from '../context/Notecontext'
function AddNotes() {
    const context=useContext(NoteContext)
    const {addnotes}=context
    const [note,setNote]=useState({name:"",description:"",age:""})
    const handleclick=(e)=>{
        e.preventDefault()
        addnotes(note.name,note.description,note.age)
    }
    const handleonchange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className='container'>
            <h2>Add a Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' id="name" aria-describedby="emailHelp" onChange={handleonchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" name='age' className="form-control" id="age" onChange={handleonchange} />
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
