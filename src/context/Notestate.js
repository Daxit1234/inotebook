import { useState } from "react";
import NoteContext from "./Notecontext";

const Notestate = (props) => {
    const s1 = [
        {
            "id":1,
            "name": "daxit",
            "description":"this is my notes",
            "age": 19
        },
        {
            "id":2,
            "name": "milan",
            "description":"this is my notes",
            "age": 34
        },
        {
            "id":3,
            "name": "raxit",
            "description":"this is my notes",
            "age": 58
        },
        {
            "id":4,
            "name": "daxit",
            "description":"this is my notes",
            "age": 19
        },
        {
            "id":5,
            "name": "vivek",
            "description":"this is my notes",
            "age": 20
        }
    ]
    const [notes, setnotes] = useState(s1)

    //add a note
    const addnotes=(name,description,age)=>{
      const note={
            "id":23,
            "name": name,
            "description":"this is description",
            "age": age
        }
        setnotes(notes.concat(note))
    }

    //delete a note
    const deletnotes=(id)=>{
        console.log("delete not"+id)
        const Newnotes=notes.filter(note=>note.id!==id)
        setnotes(Newnotes)
    }

    //edit notes
    const editnotes=()=>{

    }
    return (
        <NoteContext.Provider value={{ notes, setnotes, addnotes,deletnotes,editnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate