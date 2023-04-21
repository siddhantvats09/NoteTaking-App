import React from 'react'
import './App.css';
const App = () => {

const [text, settext] = React.useState('')
const [array, setarray] = React.useState([])
const [count, setcount] = React.useState(0)



const handelchange = (event) =>{
settext(event.target.value)

}

const handelsubmit =()=>{
    setarray([...array,text]) 
    setcount(count+1) 
    settext("") 
}
const handeldelete=(index)=>{
    const newtext=array.filter((tex)=> tex !== array[index])
    setarray(newtext)
    setcount(count-1) 
}

  return (
    <>
    <div className='main'>
      <h1>NOTE MAKING APP</h1>
      <p>Its a note making app that's help you to take notes and track your prograss</p>
        <h3>Number of notes you have [{count}]</h3>
    </div>
    <div >
        <input
        className="inputdata"
        type="text" 
        name="text"
       
        value={text}
        onChange={handelchange}
        placeholder='Enter your text here..'
        />
        <button className='button' onClick={handelsubmit} >save</button>
    </div>
    <div className="noteshow">
    {array.map((element,index)=>{
        return(  
           <ul><li>{element}</li> <button onClick={()=>handeldelete(index)} className='delete' >Delete</button> </ul>
        )
      })}
    </div>
    </>
  )
}

export default App




