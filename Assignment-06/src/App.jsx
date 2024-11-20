import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = ()=>{
    if(input.trim()){
      setTodos([...todos, {id: Date.now(),text: input,completed:false}])
      setInput('')
      
    }
  }
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      addTodo()
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-400'>
      <div className='bg-white shadow-lg rounded-3xl p-16'>
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>React - ToDo App</h1>

        <div className='mb-4 flex'>
          <input value={input} onKeyDown={handleKeyPress} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Add a new ToDo' className='flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500'/>
          <button onClick={addTodo} className='bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600'>Add</button>
        </div>

        <ul className='space-y-2'>
          {
            todos.map((todo)=>(
              <li key={todo.id} className='flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200'>
                <input type="checkbox" checked={todo.completed} onChange={() => setTodos(
                  todos.map((t) => (
                    t.id === todo.id ? {...t, completed: !t.completed} : t
                  ))
                )} className='mr-2 h-5 w-5 text-blue-600'/>
                <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500':'text-gray-800'}`}>{todo.text}</span>

                <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))} className='ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600'>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
