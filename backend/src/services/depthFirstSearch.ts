import { createTree, ITree, IPage, IAction } from "../types.ts";
import { isNull } from "../helpers.ts";

let stack: string[];
let sequences: any[];

const generateSequenceUsingTree = ( requestBody: ITree ) => {
    const tree = createTree(requestBody);
    stack = [];
    sequences = [];
    
    visitPage( tree.root );
    return sequences;
}

function visitPage( page: IPage ){
    page.visited = true;

    if( !isNull(page.actions) ){
        page.actions!.forEach( action => {
            visitAction(action);
        });

        stack.pop();
    } else {
        saveSequence();
    }
}

function visitAction( action: IAction ){
    
    stack.push(action.keyword);
    isNull(action.nextPage) ? saveSequence() : visitPage(action.nextPage!); 
}

function saveSequence() {
    let sequence = [...stack];
    sequences.push(sequence);
    stack.pop()
}

export { generateSequenceUsingTree};
