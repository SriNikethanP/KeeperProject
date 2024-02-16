import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import notes from "./notes";

function App() {
  const [notes,updateNote] = React.useState([])

  return (
    <div>
      <Header />
      <CreateArea toAdd={ updateNote} />
      {notes.map((notes)=>{
        return (<Note key={notes.key}  title={notes.title} content={notes.content} />)
      })}
      <Footer />
    </div>
  );
}

export default App;
