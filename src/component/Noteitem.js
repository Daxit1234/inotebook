import React from 'react'

function Noteitem(props) {
    const { note } = props
    return (
        <div className='col-md-3'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{note.name}</h5>
                    <h5 class="card-text">{note.age}</h5>
                    <h5 class="card-text">{note.description}</h5>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
