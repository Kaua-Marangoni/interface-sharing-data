import PropTypes from "prop-types"
import React from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const user = sessionStorage.getItem("sharing-data:password")

  return user ? children : <Navigate to="/" />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
