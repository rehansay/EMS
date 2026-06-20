import React from "react"
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import TaskAssign from "./components/other/TaskAssign"
const App=() => {

  return (
    <>
    {/* <Login/> */}
    <EmployeeDashboard/>
    <TaskAssign/>
    </>
  )
}

export default App
