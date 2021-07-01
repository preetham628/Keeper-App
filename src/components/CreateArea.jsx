import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded,setExpand] = React.useState(false);

    const [noteText,setNote] = React.useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name ,value} = event.target;
        setNote((prevValue) => {
            return {...prevValue,[name]:value}
        })
    }

    function handleClick(event){
        event.preventDefault()
        props.onAdd(noteText)
        setNote({title:"",content:""})
    }

    function expand(){
        setExpand(true)
    }


  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={noteText.title}/>}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ?"3":"1"} value={noteText.content}/>
        <Zoom in={isExpanded}>
        <Fab onClick={handleClick} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
