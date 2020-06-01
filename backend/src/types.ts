import { isUndefined, isNull } from "./helpers.ts";

interface ITree {
    root: IPage;
}

interface IPage {
    name: string;
    actions: Array<IAction> | null;
}

interface IAction {
    keyword: string;
    nextPage: IPage | null;
}

const createTree = ( bodyTree : ITree ) => {

    treeIsValidOrFail(bodyTree);

    const tree = {
        root: bodyTree.root
    };

    return tree;
}

const createPage = ({ name, actions } : IPage) => {

    if(isNull(name) || isUndefined(name) || isUndefined(actions) ) {
        throw ("Body informed is an invalid tree");
    }

    if(!isNull(actions)){
        actions!.forEach( action => {
            createAction(action);
        });
    }

    const page = {
        name,
        actions
    }

    return page;
}

const createAction = ({ keyword, nextPage } : IAction) => {

    if(isNull(keyword) || isUndefined(keyword) || isUndefined(nextPage)){
        throw ("Body informed is an invalid tree");
    }

    if(!isNull(nextPage)){
        createPage(nextPage!);
    }

    const action = {
        keyword,
        nextPage
    }

    return action;
}

const treeIsValidOrFail = ( { root } : ITree ) => {

    if(isUndefined(root)){
        throw ("Body informed is an invalid tree");
    }

    createPage( root );
}

export { createTree };
