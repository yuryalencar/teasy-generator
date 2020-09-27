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

  const onChangePage = ({ treePath, keyword, nextPage }) => {

    const treeUpdated = insertPageInTree({
      tree: {...tree},
      treePath,
      keyword,
      nextPage: nextPage
    });

    setTree(treeUpdated);
  }

  const findActionByKeyword = ({ treePath, keyword, page }) => {
    const inPath = treePath.length > 0;
    const actualKeyword = inPath ? treePath.shift() : keyword;

    if(page.actions === null || page.actions === undefined){ return }
    
    let actionFinded = page.actions.find(( action ) => action.keyword === actualKeyword );

    if(inPath) { findActionByKeyword({ treePath, keyword, page: actionFinded.next_page });}
    else { return actionFinded; }
  }

  const insertPageInTree = ({ tree, treePath, keyword, nextPage }) => {
    
    let action = findActionByKeyword({
      treePath,
      keyword,
      page: tree.root
    });

    nextPage === undefined ? action.next_page = null : action.next_page = nextPage;
    
    return tree;
  }

  return (
    <JsonContext.Provider value={{ pages, setPage, tree, setTree, insertRoot, onChangePage }}>
      {children}
    </JsonContext.Provider>
  )
}

export { JsonContext, JsonProvider }
