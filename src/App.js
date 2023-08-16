import './App.css';
import Navbar from './components/Navbar'
// import About from './components/about'
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './components/alert'
// import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);
  const showalert = (message,type)=>
  {
    setalert({
      message:message,
      type:type
    });
    setTimeout(()=>
    {
      setalert(null);
    },2000)
  }
  const toggleMode = ()=>
  {
    console.log('helllo toggled')
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert('DarkMode Enabled','success');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('DarkMode Disabled','success');
    }
  }
  return (
    <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className='container'>
              <Textform head="Enter data to Analyze" mode={mode}/> 
            </div>
    </>
  );
}

export default App;
