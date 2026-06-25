import React from "react"
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import TaskAssign from "./components/other/TaskAssign"
import Header from "./components/other/Header"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
const App=() => {

  return (
    <>
    {/* <Login/> */}
    <EmployeeDashboard/>
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
