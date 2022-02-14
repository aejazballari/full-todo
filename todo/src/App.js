import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import List from './components/List'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const api = 'http://localhost:4000/api/todos'

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(api)
    const result = await res.json()
    setData(result?.data)
  }
  const postData = async (item) => {
    console.log(item);
    const options = {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({text: item})
    }
    const req = await fetch(api, options)
    const res = await req.json();
    if(res.success) {
      fetchData()
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const deletePost = async (id) => {
    const options = {
      method: 'DELETE',
    }
    const res = await fetch(`${api}/${id}`, options)
    const result = await res.json();
    if(result.success) {
      fetchData()
    }
  }

  const editPost = async(id, body) => {
    const options = {
      method: 'PATCH',
      body: JSON.stringify({
       ...body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
    const res = await fetch(`${api}/${id}`, options)
    const result = await res.json()
    if(result.success) {
      fetchData()
    }
  }
  return (
    <div className='container-fluid'>
        <Header />
       <div className='row' style={{height: '93.5vh'}}>
        <div className='col-3' style={{backgroundColor: 'lightgray', padding: '25px 30px'}}>
            <SideBar />
        </div>
        <div className='col-9'>
            <List data={data} post={postData} deletePost={deletePost} editPost={editPost}/>
        </div>
        </div>
    </div>
  )
}

export default App