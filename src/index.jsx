import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import AppClass from './Appclass.jsx'
import './index.css'
import Data from './components/Datacomponents'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={Data}/>
  </React.StrictMode>,
)