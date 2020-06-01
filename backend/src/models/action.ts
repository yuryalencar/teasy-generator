import { IPage } from "./page.ts";

interface IAction {
    keyword : string;
    nextPage? : IPage | null;
}

export { IAction  };
