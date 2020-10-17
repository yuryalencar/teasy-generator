import { isUndefined, isNull } from "./helpers.ts";

interface ITree {
    root: IPage;
}

interface IPage {
    name: string;
    actions: Array<IAction> | null;
    visited? : boolean;
}

interface IAction {
    keyword: string;
    next_page: IPage | null;
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

const createAction = ({ keyword, next_page } : IAction) => {

    if(isNull(keyword) || isUndefined(keyword) || isUndefined(next_page)){
        throw ("Body informed is an invalid tree");
    }

    if(!isNull(next_page)){
        createPage(next_page!);
    }

    const action = {
        keyword,
        next_page
    }

    return action;
}

const treeIsValidOrFail = ( { root } : ITree ) => {

    if(isUndefined(root)){
        throw ("Body informed is an invalid tree");
    }

    createPage( root );
}

export { createTree, ITree, IAction, IPage };
