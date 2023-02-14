import { useState } from 'react'

import Hero from './components/Hero'
import Education from './components/Education'
import About from './components/About'
import Title from './components/Title'
import { CV } from './cv/Cv'


import './App.css'
import Experience from './components/Experience'
import More from './components/More'

const {hero, education, experience, languages, habilities, volunteer} = CV;

function App() {

  const [showEducation, setShowEducation] = useState(true)


  return (

    
    <div className="App">

<Title text="Code for money"/>

    <Hero hero={hero}/>
    <About hero={hero}/>

    <div className="buttonWrap">
    <button className="button" onClick={ 
  () => setShowEducation(true)
}  >Education</button>

<button className="button" onClick={ 
  () => setShowEducation(false)
}  >Experience</button>
</div>
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
