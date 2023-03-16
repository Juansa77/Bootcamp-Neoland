

import './App.css'
import { Outlet } from 'react-router-dom'
import useRequest from './Hooks/useRequest'


function App() {
  
  const urlNewsApi = import.meta.env.VITE_APP_NEWS
  const requestNews = useRequest(urlNewsApi)


  return (
    <div className="App">
 

    <Outlet context={[requestNews, urlNewsApi]}/>
  
    </div>
  )
}

export default App
