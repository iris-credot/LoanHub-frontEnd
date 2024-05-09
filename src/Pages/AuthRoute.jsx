import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthRoute() {
  return (
    <>
       <Outlet />
    </>
  )
}

export default AuthRoute