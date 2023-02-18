import React,{useContext} from 'react'
import NoteContext from '../context/Notecontext'

export default function Alert(props) {
  const context = useContext(NoteContext)
  const { alert } = context
  return (
    <div className='mt-5 text-center container' style={{ height: "50px" }}>
     {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type} :</strong>{alert.msg}
      </div>
     }
    </div>
  )
}
