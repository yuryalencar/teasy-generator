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
  
  const onChangePage = (page) => {
   const newActions =  {
     ...tree.root.actions
    }
    
    console.log(newActions.find(({keyword}) => keyword === 'Example Keyword 2'))
    console.log('pages', page)
  }
  
  return (
	  <JsonContext.Provider value={{ pages, setPage, tree, setTree, insertRoot, onChangePage  }}>
		{children}
	  </JsonContext.Provider>
  )
}

export { JsonContext, JsonProvider }
