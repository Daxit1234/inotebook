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
            "id":10,
            "name": name,
            "description":description,
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
    const editnotes= async(id,name,description,age)=>{
        //API call
        // const responce=await fetch(url,{
        //     method:POST,
        //     headers:{
        //         "Content-Type":"application.json"
        //     },
        //     body:JSON.stringify(data)
        // });
        // return responce.json();

        for(let i=0;i<notes.length;i++){
            const element=notes[i];
            if(element.id===id){
                element.name=name;
                element.description=description;
                element.age=age;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, setnotes, addnotes,deletnotes,editnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate