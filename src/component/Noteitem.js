import React from 'react'
function Noteitem(props) {
    const { note } = props
    return (
        <div className='col-md-3'>
            <div className="card">
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                    <h5 className="card-title">{note.id}  <i className="fa-sharp fa-solid fa-trash"></i></h5>
                    </div>
                    <h3 className='card-text'>{note.name}</h3>
                    <h5 className="card-text">{note.age}</h5>
                    <h5 className="card-text">{note.description}</h5>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
