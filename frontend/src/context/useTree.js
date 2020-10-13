const createPage = ({ name, actions}) => ({
    name: `${name}`,
    actions: createActions(actions)
})

const createActions = actions => {
    let newActions = [];

    if(actions === null) { return null }

    actions.forEach(action => {
        newActions.push({
            keyword: action.keyword,
            next_page: null
        })
    });

    return newActions
}


const createNodeToShow = ({ page, treePath }) => ({
    page,
    treePath: [...treePath]
})

export {
    createPage,
    createNodeToShow,
}