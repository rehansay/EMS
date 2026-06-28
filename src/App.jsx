import React, { useEffect } from "react"
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import TaskAssign from "./components/other/TaskAssign"
import Header from "./components/other/Header"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import AuthContext from "./context/AuthContext"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
const App=() => {
  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  },)

  return (
    <>
    <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    {/* <AuthContext/> */}
    
    </>
  )
}

export default App
