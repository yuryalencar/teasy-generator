import { createTree, ITree, IPage, IAction } from "../types.ts";
import { isNull } from "../helpers.ts";

let sequences: any[] = [];
let stack: string[] = [];

const generateSequenceUsingTree = ( requestBody: ITree ) => {
    const tree = createTree(requestBody);
    visitPage( tree.root );
    console.log("sequences", sequences);
    console.log("stack", stack);
    return tree;
}

function visitPage( page: IPage ){
    page.visited = true;

    if( !isNull(page.actions) ){
        page.actions!.forEach( action => {
            visitAction(action);
        });
    }
}

function visitAction( action: IAction ){
    if(!isNull(action.nextPage)){
        stack.push(action.keyword);
        console.log("PUSHED KEYWORD");
        visitPage(action.nextPage!);
    } else if(stack.length > 0) {
        let sequence: string[] = [...stack];
        sequences.push(sequence);
        console.log("PUSHED SEQUENCE");
        stack.pop();
        console.log("POPED KEYWORD");
    }
}



export { generateSequenceUsingTree};
