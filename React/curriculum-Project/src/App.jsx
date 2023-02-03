import { useState } from 'react'

import Hero from './components/Hero'
import Education from './components/Education'
import About from './components/About'
import { CV } from './cv/Cv'


import './App.css'
import Experience from './components/Experience'
import More from './components/More'

const {hero, education, experience, languages, habilities, volunteer} = CV;

function App() {

  const [showEducation, setShowEducation] = useState(true)


  return (

    
    <div className="App">


    <Hero hero={hero}/>
    <About hero={hero}/>
    <button className="custom-btn btn-4" onClick={ 
  () => setShowEducation(true)
}  >Education</button>

<button className="custom-btn btn-4" onClick={ 
  () => setShowEducation(false)
}  >Experience</button>

{showEducation? 
    <Education education={education}/> :
    <Experience experience= {experience}/> }
   
   


    <More 
    languages={languages}
    habilities ={habilities}
    volunteer={volunteer}
    />
    
    </div>
  )
}

export default App
