import React, { createContext, useState, useEffect } from 'react'
import { saveContext, loadContext } from './persistContext';

const applicationContext = loadContext()

const JsonContext = createContext(null)
const initialRoot = applicationContext ? applicationContext.tree.root : null
const initialPages = applicationContext ? applicationContext.pages : null
const initialNodes = applicationContext ? applicationContext.nodes : []

const initialTree = {
  root: initialRoot
}

const JsonProvider = ({ children }) => {
  const [pages, setPage] = useState(initialPages)
  const [tree, setTree] = useState(initialTree)
  const [nodes, setNodes] = useState(initialNodes)

  useEffect(() => {
    saveContext({ pages, tree, nodes })
  }, [pages, tree, nodes])

  const insertRoot = ({ root }) => {
    setTree({ ...tree, root })
  }

  const onChangePage = ({ treePath, keyword, nextPage }) => {
    const treeUpdated = insertPageInTree({
      tree: {...tree},
      treePath,
      keyword,
      nextPage: {...nextPage}
    });

    setTree(treeUpdated);
  }

  const findActionByKeyword = ({ treePath, keyword, page }) => {
    const inPath = treePath.length > 0;
    const actualKeyword = inPath ? treePath.shift() : keyword;

    if(page.actions === null || page.actions === undefined){ return }
    
    let actionFinded = page.actions.find(( action ) => action.keyword === actualKeyword );

    if(inPath) { return findActionByKeyword({ treePath:[...treePath], keyword, page: actionFinded.next_page });}
    else { return actionFinded; }
  }

  const insertPageInTree = ({ tree, treePath, keyword, nextPage }) => {

    let action = findActionByKeyword({
      treePath: [...treePath],
      keyword,
      page: tree.root
    });

    nextPage.name === undefined ? action.next_page = null : action.next_page = {...nextPage};
    nextPage.name === undefined ? removeNodes({treePath, keyword}) : insertNode({page: nextPage, treePath, keyword});

    return tree;
  }

  const insertNode = ({ page, treePath, keyword}) => {
    treePath.push(keyword);
    
    let node = {
      page,
      treePath: treePath
    }

    setNodes([...nodes, node]);
  }

  const isValidNode = (node, treeFullPath) => {

    let isValid = true;

    if(node.treePath.length < treeFullPath.length) {
      return isValid;
    }
  
    for (let index = 0; index < treeFullPath.length; index++) {
      if(node.treePath[index] !== treeFullPath[index]){
        return isValid;
      }
    }

    isValid = false;
    return isValid;
  }

  const removeNodes = ({ treePath, keyword }) => {
    treePath.push(keyword);
    let validNodes = nodes.filter((node) => isValidNode(node, treePath));
    setNodes(validNodes);
  }

  return (
    <JsonContext.Provider value={{ pages, setPage, tree, setTree, insertRoot, onChangePage, nodes }}>
      {children}
    </JsonContext.Provider>
  )
}

export { JsonContext, JsonProvider }
