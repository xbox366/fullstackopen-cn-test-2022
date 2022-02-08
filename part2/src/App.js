import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Note from './components/Note'

/*const AddButton=(props.event)=>{
  /*const addNote=(props.event)=>{
    event.preventDefault()
    const noteObject={
      content:newNote,
      date:new Date(),
      important:Math.random()<0.5
    }
    axios.post('http://localhost:3001/notes',noteObject)
    .then(res=>{
      console.log(res)
    })
  }
  const [newNote,setNewNote] = useState('')
    props.preventDefault()
    const noteObject={
      content:newNote,
      date:new Date(),
      important:Math.random<0.5
    }
    axios.post('http://localhost:3001/notes',noteObject)
    .then(res=>{
      console.log(res) 
    })
  
}*/

const App = () =>{
  const[notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] =useState(true)
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      // ...
    </div>
  )}
  const toggleImportanceOf=(id)=>{
    console.log('importance of'+id+'needs to be toggled')
  }
  const addNote=(event)=>{
    event.preventDefault()
    const noteObject={
      content:newNote,
      date:new Date(),
      impoortant:Math.random<0.5
    }
    axios.post('http://localhost:3001/notes',noteObject)
    .then(ress=>{
      setNotes(notes.concat(ress.data))
      setNewNote('')
      console.log(ress)
    })
  }
  useEffect(()=>{
    console.log('effect')
    axios.get('http://localhost:3001/notes')
    .then(res=>{
      console.log('promise fulfilled')
      setNotes(res.data)
    })
  },[]
  )
  return(
    <div>
      <h1>notes</h1>
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          show{showAll?'important':'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note,i)=>
        <Note
        key={i}
        note={note}
        toggleImportance={()=>toggleImportanceOf(note.id)} 
        />
        )}
      </ul>
      <div>
        <button onClick={addNote}>创建</button>
      </div>
    </div>
  )
}


export default App;
