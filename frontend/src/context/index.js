import React, { createContext, useState, useEffect } from 'react'
import { saveContext, loadContext } from './persistContext';

const applicationContext = loadContext()

const JsonContext = createContext(null)
const initialRoot = applicationContext ? applicationContext.tree.root : null
const initialPages = applicationContext ? applicationContext.pages : null

const initialTree = {
  root: initialRoot
}

const JsonProvider = ({ children }) => {
  const [pages, setPage] = useState(initialPages)
  const [tree, setTree] = useState(initialTree)

  useEffect(() => {
    saveContext({ pages, tree })
  }, [pages, tree])

  const insertRoot = ({ root }) => {
    setTree({ ...tree, root })
  }

  const onChangePage = ({ currentPage, keyword, nextPage }) => {
    console.log('currentPage', currentPage);
    console.log('keyword', keyword);
    console.log('nextPage', nextPage);
    //  const newActions =  {
    //    ...tree.root.actions
    //   }

    //   console.log(newActions.find(({keyword}) => keyword === 'Example Keyword 2'))
    //   console.log('pages', page)
  }

  return (
    <JsonContext.Provider value={{ pages, setPage, tree, setTree, insertRoot, onChangePage }}>
      {children}
    </JsonContext.Provider>
  )
}

export { JsonContext, JsonProvider }
