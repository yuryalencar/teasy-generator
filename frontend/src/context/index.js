import React, { createContext, useState } from 'react'

const JsonContext = createContext(null)

const initianTree = {
  root: null
}

const JsonProvider = ({ children }) => {
  const [pages, setPage] = useState()
  const [tree, setTree] = useState(initianTree)
  
  const insertRoot = ({root}) => {
    setTree({...tree, root})
  }
  
  return (
	  <JsonContext.Provider value={{ pages, setPage, tree, setTree, insertRoot }}>
		{children}
	  </JsonContext.Provider>
  )
}

export { JsonContext, JsonProvider }