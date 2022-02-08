import axios from "axios";
import React ,{useState,useEffect} from "react";
import Note from "./components/Note";
import noteServices from "./services/notes"

const Notification = ({message}) =>{
  if(message===null){
    return null
  }
  return(
    <div className="error">
      {message}
    </div>
  )
}//定义报警组件
const Footer = () =>{
  const footerStyle={
    color:"green",
    fontStyle:"italic",
    fontSize:16
  }
  return(
    <div style={footerStyle}>
      <br />
      <em>Note app, department of computer science, university of helsinki 2022</em>
    </div>
  )
}
const App=()=>{
  const [notes,setNotes]=useState([])//存储便笺中的数据
  const [newNote,setNewNote]=useState(["hello world!"])//存储新增节点的数据使用完赋值空
  const [showAll,setShowAll]=useState(true)//控制是否全部显示
  const notesToShow=showAll?notes:notes.filter(note=>note.important===true)
  const [errorMessage,setErrorMessage] = useState('some error happened...')
  //通过useEffect获取数据装载页面
  const hook=()=>{
    console.log('effect')
    noteServices.getAll().then(res=>{
      setNotes(res)
    })
  }
  useEffect(hook,[])
  console.log('render',notes.length,'notes')
  //下方添加数据的操作
  const addNote=(e)=>{
    e.preventDefault()
    //console.log("button clicked",e.target)
    const noteObject={
      content:newNote,
      date:new Date().toISOString(),
      important:Math.random()<0.5,
      id:notes.length+1
    }
    
    noteServices.create(noteObject).then(res=>{
      setNotes(notes.concat(res))
      setNewNote('')
    })


    /*axios.post('http://localhost:3001/notes',noteObject).then(res=>console.log(res))
    setNotes(notes.concat(noteObject))
    setNewNote('')*/
  }
  const handleNoteChange=(e)=>{
    console.log(e.target.value)
    setNewNote(e.target.value)
  }
 const toggleImportanceOf=(id)=>{
    //console.log('importance of '+id+' needs to be toggled')
    //const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n=>n.id===id)
    const changedNote = {...note,important:!note.important}

    noteServices.update(id,changedNote).then(res=>{
      setNotes(notes.map(item=>item.id!==id?item:res))
    })
    .catch(error=>{
      setErrorMessage(`Note '${note.content}' was already removed from server `)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
      setNotes(note.filter(n=>n.id!==id))
    })
    /*.catch(error => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
    axios.put(url,changedNote).then(res=>{
      setNotes(notes.map(item=>item.id!==id?item:res.data))
    }*/
    console.log(`importance of ${id} needs to be toggled`)
  }
  /*const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    })
  }*/
 
  return(
    <div>
      <h1>Note</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={()=>setShowAll(!showAll)}>show {showAll?"important":"all"}</button>
      </div>
      <ul>
        {notesToShow.map((note,i)=><Note key={i} note={note} toggleImportance={()=>toggleImportanceOf(note.id)} />)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App;
