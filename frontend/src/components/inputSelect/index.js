import React, { useContext, useState, useEffect } from 'react'
import { FormGroup, InputGroup, InputIcone } from './styles'
import { Hexagon } from 'react-feather'
import { JsonContext } from '../../context'

// START: Methods for when to refresh the screen the options are selected
const getOption = ({ isRoot, keyword, actualNode, pages }) =>
  isRoot
    ? getRootOption({ keyword, root: actualNode, pages })
    : getNodeOption({ keyword, node: actualNode })

const getRootOption = ({ keyword, root, pages }) => {
  let option = -1
  let nextPage

  if (root && root.actions) {
    nextPage = root.actions.find((action) => action.keyword === keyword).next_page
  }

  if (!nextPage) return option

  return pages.findIndex((page) => nextPage.name === page.name)
}

const getNodeOption = ({ keyword, node }) => {
  let option

  if (node && node.actions) {
    option = node.actions.find((action) => action.keyword === keyword).next_page
  }

  return option ? option : {}
}
// END: Methods for when to refresh the screen the options are selected

const InputSelect = ({ keyword, treePath, actualNode, isRoot }) => {
  const { pages, onChangePage } = useContext(JsonContext)
  const [optionSelected, setOptionSelected] = useState(
    getOption({ keyword, actualNode, isRoot, pages })
  )

  useEffect(() => {
    setOptionSelected(getOption({ keyword, actualNode, isRoot, pages }))
  }, [actualNode, keyword, isRoot, pages])

  return (
    <FormGroup>
      <InputGroup>
        <InputIcone>{<Hexagon />}</InputIcone>
        <select
          className='form-control'
          value={optionSelected}
          onChange={(e) => {
            onChangePage({
              treePath: treePath,
              keyword: keyword,
              nextPage: Object.assign({}, pages[e.target.value]),
              actualNode: actualNode,
              optionIndex: e.target.value,
              isRoot
            })
            setOptionSelected(e.target.value)
          }}
        >
          <option value={null}>Select the next page / Clear</option>
          {pages.map((page, i) => (
            <option key={i} value={i}>
              {page.name}
            </option>
          ))}
        </select>
      </InputGroup>
    </FormGroup>
  )
}

export default InputSelect
