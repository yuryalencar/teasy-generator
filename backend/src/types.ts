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

const treeIsValidOrFail = ( { root } : ITree ) => {

    if(isUndefined(root)){
        throw ("Body informed is an invalid tree");
    }

    createPage( root );
}

const createPage = ({ name, actions } : IPage) => {
    if(isNull(name) || isUndefined(name) || isUndefined(actions) ) {
        throw ("Body informed is an invalid tree");
    }
    
    const page = {
        name,
        actions
    }

    return page;
}


export { createTree };
