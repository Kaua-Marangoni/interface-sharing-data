import React from "react"
import ReactDOM from "react-dom"
import { ToastContainer } from "react-toastify"

import Routes from "./routes/routes"
import GlobalStyles from "./styles/globalStyles"

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyles />
    <ToastContainer theme="colored" autoClose={2000} />
  </>,
  document.getElementById("root")
)
