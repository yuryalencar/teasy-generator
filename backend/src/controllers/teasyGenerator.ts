import { IPage } from "../models/page.ts";
import { IAction } from "../models/action.ts";

const depthFirstSearch = async ({ request, response }: { request: any; response: any }) => {
  const body = await request.body();
  //const book: IBook = body.value
  //books.push(book)
  response.body = body.value;
  response.status = 200;
}

export { depthFirstSearch };
