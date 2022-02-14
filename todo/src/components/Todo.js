import React, {useState} from 'react'

function Todo({item, deletePost, editTodo}) {
    const {text, id} = item;
    const [hover, setHover] = useState(false)
    const enter = () => {
      setHover(true)
    }
    const leave = () => {
      setHover(false)
    }
  return (
       <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center', margin:'5px 0px', paddingTop:'5px', paddingLeft:'0px', borderBottom: '1px solid lightgray'}} onMouseEnter={enter} onMouseLeave={leave}>
        <p style={{ flexGrow: 1}}>{text}</p>
        <div style={{width:'30%'}}>
        {
          hover && <div style={{display: 'flex', justifyContent:'space-evenly'}}>
        <p style={{cursor: 'pointer'}} onClick={() => editTodo(id)}>Edit</p>
        <p style={{cursor: 'pointer'}} onClick={() => deletePost(id)}>Delete</p>
          </div>
        }
        </div>
       </div>
  )
}

export default Todo