import React, {useContext, useState } from "react"
import Login from './components/Auth/Login'
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import {AuthContext }from "./context/AuthProvider"
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
// const App=() => {
//   useEffect(()=>{
//     // setLocalStorage()
//     getLocalStorage()
//   },)

const App=()=>{
  const [user, setUser] = useState(null)
  const authData=useContext(AuthContext)
  

  const handleLogin=(email, password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      
    }else if (authData && authData.employees.some(emp => emp.email === email && emp.password === password)) {
      setUser('employee')
     
    }
    else{
      alert("Invalid Credentials");
      
    }
    

  }


return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    {/* <AuthContext/> */}
    
    </>
  )
}

export default App
