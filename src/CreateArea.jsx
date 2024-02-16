import React from "react";

function CreateArea(props) {
    const [title,setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    function updateTitle(e) {
        const newTitle = e.target.value;
        setTitle(newTitle)
    }
    function updateText(e) {
        const newText = e.target.value;
        setContent(newText)
    }
    function addItem() {
        props.toAdd((prevNoteArray) => {
            // console.log(prevNoteArray)
            return ([...prevNoteArray, {
                // key: prevNoteArray.length + 1,
                title: title,
                content:content,
            }])
        })
        setTitle("")
        setContent("")
        // console.log(props.toAdd)
    }
  return (
    <div>
      <form>
        <input onChange={updateTitle} name="title" placeholder="Title" />
              <textarea onChange={updateText} name="content" placeholder="Take a note..." rows="3" /> 
    <button onClick={addItem} type="button" >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
