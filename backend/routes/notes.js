const express = require('express')
const router = express.Router()
const fetchuser = require('../midddleware/Fetchuser');
const Note = require("../models/Notes")
const { body, validationResult } = require('express-validator');

// ROUTE 1:fetch all notes using GET: http://localhost:5000/api/notes/fetchallnotes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    }
    catch (err) {
        console.error(err)
        res.status(500).send("internal server error")
    }
})

//ROUTE 2:Add a new note using POST: http://localhost:5000/api/notes/addnotes
router.post('/addnotes', fetchuser, [
    body('title', "enter valid tilte").isLength({ min: 3 }),
    body('description', "description must be least 5 character").isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body
        //if these are error return bad request and the error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
       const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save()
        res.json(saveNote)
    }
    catch (err) {
        console.error(err)
        res.status(500).send("internal server error")
    }
})

//ROUTE 3:Update and existing note  using PUT: http://localhost:5000/api/notes/updatenote/:id  login require
router.put('/updatenote/:id', fetchuser,async (req, res) => {
    try {
        const { title, description, tag } = req.body
        //Create new notes object
        const newnote={};
        if(title){newnote.title=title};
        if(description){newnote.description=description};
        if(tag){newnote.tag=tag};

        //find the note to be updated
        let note=await Note.findById(req.params.id);
        if(!note){res.status(400).send("not found")}

        if(note.user.toString() != req.user.id){
            return res.status(400).send("Not Allow")
        }

        note=await Note.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
        res.json({note});   
    }
    catch (err) {
        console.error(err)
        res.status(500).send("internal server error")
    }
})

//ROUTE 4:Delete note  using DELETE: http://localhost:5000/api/notes/deletenote/:id  login require
router.delete('/deletenote/:id', fetchuser,async (req, res) => {
    try {
        //find the note to be deleted
        let note=await Note.findById(req.params.id);
        if(!note){res.status(404).send("not found")}

        //Allow deletion onlt if user owens this notes
        if(note.user.toString() != req.user.id){
            return res.status(401).send("Not Allow")
        }

        note=await Note.findByIdAndDelete(req.params.id)
        res.json({"success":"note is deleted",note});   
    }
    catch (err) {
        console.error(err)
        res.status(500).send("internal server error")
    }
})
module.exports = router