import { IAction } from "./action.ts";

interface IPage {
    name : string;
    actions : Array<IAction> | null;
}

export { IPage };                    
