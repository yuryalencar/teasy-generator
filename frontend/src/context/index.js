import React, { createContext, useState, useEffect } from 'react'
import { createNodeToShow, createPage } from './useTree'
import { saveContext, loadContext } from './persistContext'

const applicationContext = loadContext()

const JsonContext = createContext(null)
const initialRoot = applicationContext ? applicationContext.tree.root : null
const initialPages = applicationContext ? applicationContext.pages : []
const initialNodes = applicationContext ? applicationContext.nodes : []

const initialTree = {
  root: initialRoot,
}

const JsonProvider = ({ children }) => {
  const [pages, setPage] = useState(initialPages)
  const [tree, setTree] = useState(initialTree)
  const [nodes, setNodes] = useState(initialNodes)

  useEffect(() => {
    saveContext({ pages, tree, nodes })
  }, [tree, nodes, pages])

  const insertRoot = ({ root }) => setTree({ ...tree, root: createPage(root) })

  const onChangePage = ({
    treePath,
    keyword,
    nextPage,
    actualNode,
    optionIndex,
    isRoot,
  }) => {
    const treeUpdated = insertPageInTree({
      tree,
      treePath,
      keyword,
      nextPage,
    })

    setTree(treeUpdated)
    if (!isRoot && actualNode && actualNode.actions) {
      actualNode.actions.find(
        (action) => action.keyword === keyword
      ).next_page = optionIndex
    }
  }

  const insertPageInTree = ({ tree, treePath, keyword, nextPage }) => {
    let action = findActionByKeyword({
      treePath: [...treePath],
      keyword,
      actualPage: tree.root,
    })

    nextPage.name === undefined
      ? (action.next_page = null)
      : (action.next_page = createPage(nextPage))

    nextPage.name === undefined
      ? removeNodes({ treePath: [...treePath, keyword] })
      : insertNode({
          page: createPage(nextPage),
          treePath: [...treePath, keyword],
        })

    return tree
  }

  const findActionByKeyword = ({ treePath, keyword, actualPage }) => {
    const inPath = treePath.length > 0
    const actualKeyword = inPath ? treePath.shift() : keyword

    if (actualPage.actions === null || actualPage.actions === undefined) {
      return
    }

    let actionFinded = actualPage.actions.find(
      (action) => action.keyword === actualKeyword
    )

    if (inPath) {
      return findActionByKeyword({
        treePath,
        keyword,
        actualPage: actionFinded.next_page,
      })
    } else {
      return actionFinded
    }
  }

  const insertNode = ({ page, treePath }) =>{
    setNodes([
      ...nodes.filter((node) => isValidNode(node, treePath)),
      createNodeToShow({ page, treePath }),
    ])
  }

  const removeNodes = ({ treePath }) => {
    setNodes(nodes.filter((node) => isValidNode(node, treePath)))
  }

  const isValidNode = (node, treeFullPath) => {
    let isValid = true

    if (node.treePath.length < treeFullPath.length) {
      return isValid
    }

    for (let index = 0; index < treeFullPath.length; index++) {
      if (node.treePath[index] !== treeFullPath[index]) {
        return isValid
      }
    }

    isValid = false
    return isValid
  }

  return (
    <JsonContext.Provider
      value={{
        pages: Object.assign([], pages),
        setPage,
        tree: Object.assign({}, tree),
        insertRoot,
        onChangePage,
        nodes: Object.assign([], nodes),
      }}
    >
      {children}
    </JsonContext.Provider>
  )
}

export { JsonContext, JsonProvider }
