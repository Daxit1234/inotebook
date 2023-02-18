import React, { useContext } from 'react'
import NoteContext from '../context/Notecontext'

function Noteitem(props) {
    const context = useContext(NoteContext)
    const { deletnotes } = context
    const { note ,updatenote} = props
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">{note.id} </h5>
                        <div>
                            <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
                            <i className="fa-sharp fa-solid fa-trash" onClick={() => { deletnotes(note._id) }}></i>
                        </div>
                    </div>
                    <h3 className='card-text'>{note.title}</h3>
                    <h5 className="card-text">{note.tag}</h5>
                    <h5 className="card-text">{note.description}</h5>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
