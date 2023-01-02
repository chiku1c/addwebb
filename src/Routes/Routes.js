import React from 'react'
import { Route,Routes } from 'react-router-dom'
import StudentsReg from '../Components/StudentsReg'
import StudentsTabel from '../Components/StudentsTabel'

const  Routeses=()=>{
  return (
    <Routes>
        <Route path="" element={<StudentsTabel/>}/>
        <Route path="/studentreg" element={<StudentsReg/>}/>
        <Route path="/:id" element={<StudentsReg/>}/>
    </Routes>
  )
}

export default Routeses