import { useState } from "react";
import NoteContext from "./Notecontext";

const Notestate = (props) => {
  const host = "http://localhost:5000"
  const noteInitial = [  ]
  const [notes, setnotes] = useState(noteInitial)
  const [alert,setalert]=useState(null)
  let showalert=(massage,type)=>{
    setalert({
      msg:massage,
      type:type
    });
    setTimeout(() => {
      setalert(null)
    }, 1000);
}

  //get all a note
  const getnotes = async() => {
    const responce = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json=await responce.json()
    setnotes(json)
  }
  //add a note
  const addnotes = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const note=await response.json();
    setnotes(notes.concat(note))
    showalert("note is added","success")
  }

  //delete a note
  const deletnotes =async (id) => {
    //api call for delete note
    const responce = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
   const json=await responce.json()
    //logic for delete
    console.log("delete not" + id)
    const Newnotes = notes.filter(note => note._id !== id)
    setnotes(Newnotes)
    showalert("note is Deleted","danger")
  }

  //edit notes
  const editnotes = async (id, title, description, tag) => {
    //API call
    const responce = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify(title, description, tag)
    });
    const json = responce.json();
  console.log(json)
    let newNotes =JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      //const element = newNotes[index];
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setnotes(newNotes);
    showalert("note is Upadated successfully","success")

  }
  return (
    <NoteContext.Provider value={{alert, notes,showalert,getnotes, setnotes, addnotes, deletnotes, editnotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default Notestate