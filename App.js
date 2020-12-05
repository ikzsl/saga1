import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from 'redux-logger'

export default () => {
  const store = createStore(reducer, applyMiddleware(logger, thunk))
  return (<p>rrrr</p>)
}