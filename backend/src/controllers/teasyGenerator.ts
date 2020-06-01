import { createTree } from "../types.ts";

const depthFirstSearch = async ({ request, response }: { request: any; response: any }) => {
    try{
        const body = await request.body();
        const tree = createTree(body.value);
        
        response.body = tree;
        response.status = 200;
    }catch (error) {
        response.body = {
            message: "Your not send a tree, for more details access: https://github.com/yuryalencar/TeasyFSMGenerator"
        };
        response.status = 400;

        console.log("→ An Error has Ocurred in import of the tree (depthFirstSearch : method) 💥 ");
    }
}

export { depthFirstSearch };
