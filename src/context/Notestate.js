import { useState } from "react";
import NoteContext from "./Notecontext";

const Notestate = (props) => {
    const s1 = [
        {
            "name": "daxit",
            "description":"this is my notes",
            "age": 19
        },
        {
            "name": "milan",
            "description":"this is my notes",
            "age": 34
        },
        {
            "name": "raxit",
            "description":"this is my notes",
            "age": 58
        },
        {
            "name": "daxit",
            "description":"this is my notes",
            "age": 19
        },
        {
            "name": "vivek",
            "description":"this is my notes",
            "age": 20
        }
    ]
    const [state, setState] = useState(s1)
    return (
        <NoteContext.Provider value={{ state, setState }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default Notestate