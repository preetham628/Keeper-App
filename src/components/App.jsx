import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [noteList,setNoteList] = React.useState([]);

    function addNote(newNote){
        setNoteList((prevValue)=>{
            return [...prevValue,newNote]
        })
    }

    function deleteNote(id){
        setNoteList((prevValue)=>{
            return prevValue.filter((note,index)=> {
                return index !== id
            })
        })
    }

    return <div>
    <Header />
    <CreateArea onAdd={addNote}/>
    {noteList.map((note,index)=><Note key={index} id={index}title={note.title}content={note.content} onDelete={deleteNote}/>)}
    <Footer /></div>
}

export default  App