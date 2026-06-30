import React, {useContext, useState, useEffect } from "react"
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
  const [loggedInUserData, setloggedInUserData]=useState(true)
  const authData=useContext(AuthContext)
  
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData]);
  

  const handleLogin=(email, password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      
    }else if (authData) {
      const employee=authData.employees.find((e)=>email==e.email && e.password==password)
      if(employee){

        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      

      }
      
     
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
