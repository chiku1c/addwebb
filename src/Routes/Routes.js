import React from 'react'
import { Route,Routes } from 'react-router-dom'
import StudentsEdit from '../Components/EditStudent'
import StudentsReg from '../Components/StudentsReg'
import StudentsTabel from '../Components/StudentsTabel'

const  Routeses=()=>{
  return (
    <Routes>
        <Route path="" element={<StudentsTabel/>}/>
        <Route path="/studentreg" element={<StudentsReg/>}/>
        <Route path="/edituser/:id" element={<StudentsEdit/>}/>
    </Routes>
  )
}

export default Routeses