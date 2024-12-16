import React from 'react'
import TodoList from './components/todolist'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Charts from "./pages/Charts"
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Page404 from './pages/Page404'
import Counter from './components/UseStateExample'
import CardDisplay from './components/Props'
import FetchData from './components/FetchData'
import LogIn from './pages/LogIn'
import Counter2 from './components/counter2'

function App() {
  return (
    <>
    <Routes>
      {/* Basic Routing */}
      <Route exact path="/" element={<LogIn></LogIn>}></Route>
      <Route  path="/home" element={<Home/>}></Route>
      <Route path="/todolist" element={<TodoList></TodoList>}></Route>
      <Route path="/counter" element={<Counter></Counter>}></Route>
      <Route path="/counter2" element={<Counter2></Counter2>}></Route>
      <Route path="/card" element={<CardDisplay></CardDisplay>}></Route>
      <Route path="/FetchData" element={<FetchData></FetchData>}></Route>
      
      
     {/* Nested Routing  */}
      <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='charts' element={<Charts/>}/>
      <Route path='settings' element={<Settings></Settings>}/>

      </Route>
      {/* Star Routes */}
      <Route path='*' element={<Page404></Page404>}></Route>
    </Routes>
    </>
  )
}

export default App
