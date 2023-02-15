import { useState } from "react";
import NoteContext from "./Notecontext";

const Notestate = (props) => {
    const s1 = [
        {
          "_id": "63e7a62764a2547f0cbd899e",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is updated title",
          "description": "thiis is updated dscription",
          "tag": "person",
          "date": "2023-02-11T14:28:55.354Z",
          "__v": 0
        },
        {
          "_id": "63e7a66664a2547f0cbd89a0",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is title",
          "description": "thiis is description",
          "tag": "personal",
          "date": "2023-02-11T14:29:58.331Z",
          "__v": 0
        },
        {
          "_id": "63e7a6c714c468d8c7714dd1",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is title",
          "description": "thiis is description",
          "tag": "personal",
          "date": "2023-02-11T14:31:35.463Z",
          "__v": 0
        },
        {
          "_id": "63e7a6c714c468d8c7714dd3",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is title",
          "description": "thiis is description",
          "tag": "personal",
          "date": "2023-02-11T14:31:35.952Z",
          "__v": 0
        },
        {
          "_id": "63e7a6c814c468d8c7714dd5",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is title",
          "description": "thiis is description",
          "tag": "personal",
          "date": "2023-02-11T14:31:36.403Z",
          "__v": 0
        },
        {
          "_id": "63e7a6c814c468d8c7714dd7",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is title",
          "description": "thiis is description",
          "tag": "personal",
          "date": "2023-02-11T14:31:36.636Z",
          "__v": 0
        },
        {
          "_id": "63e7a73caeb1c2319fd307ad",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is title",
          "description": "thiis is description",
          "tag": "personal",
          "date": "2023-02-11T14:33:32.195Z",
          "__v": 0
        },
        {
          "_id": "63e7a73caeb1c2319fd307af",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is title",
          "description": "thiis is description",
          "tag": "personal",
          "date": "2023-02-11T14:33:32.978Z",
          "__v": 0
        },
        {
          "_id": "63ea35ac7491e91f9b8408b0",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is updated title",
          "description": "thiis is updated dscription",
          "tag": "person",
          "date": "2023-02-13T13:05:48.546Z",
          "__v": 0
        },
        {
          "_id": "63ea5886d263a30f4a8eabad",
          "user": "63e793f1654bcad523f04f41",
          "title": "this is delete note",
          "description": "thiis isscription",
          "tag": "person",
          "date": "2023-02-13T15:34:30.406Z",
          "__v": 0
        }
      ]
    const [notes, setnotes] = useState(s1)

    //add a note
    const addnotes=(title,description,tag)=>{
      const note={
            "id":10,
            "title": title,
            "description":description,
            "tag": tag
        }
        setnotes(notes.concat(note))
    }

    //delete a note
    const deletnotes=(id)=>{
        console.log("delete not"+id)
        const Newnotes=notes.filter(note=>note._id!==id)
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