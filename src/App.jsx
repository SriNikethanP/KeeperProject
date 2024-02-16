import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import notes from "./notes";

function App() {
  const [notes,updateNote] = React.useState([])
  function deleteNote(id) {
    // console.log(id);
    updateNote((prevNoteArray) => {
      return prevNoteArray.filter((item,index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea toAdd={ updateNote} />
      {notes.map((notes,index)=>{
        return (<Note key={index} id={index} toDelete={ deleteNote} title={notes.title} content={notes.content} />)
      })}
      <Footer />
    </div>
  );
}

export default App;
