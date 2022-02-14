import React, {useState} from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

function List({data, post, deletePost, editPost}) {
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const editTodo = (id) => {
        const findTodo = data.filter(item => item.id === id);
        setInput(findTodo.text)
    }
  return (
      <div className='container-fluid' style={{padding: '30px 40px'}}>
          <div className='row'>
            <h5 className='col-10' style={{paddingLeft:'0px'}}>Inbox</h5>
            <div className='col'>
                comments
            </div>
            <div className='col'>
                views
            </div>
          </div>
          <div className='row'>
              {
                  data.map(item => <Todo item={item} key={item.id} deletePost={deletePost} editPost={editPost} editTodo={editTodo}/>)
              }
          </div>
          {/* <AddTodo /> */}
          <div className='row'>
              <input type='text' placeholder='Add todo' value={input} onChange={handleInput} className='col-3'></input>
              <button type='button' onClick={() => {
                  post(input);
                  setInput('')
              }} className='col-1'>Add</button>
          </div>
      </div>
  )
}

export default List