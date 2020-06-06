import { generateSequenceUsingTree } from "../services/depthFirstSearch.ts";

const STATUS_OK: number = 200;
const STATUS_BAD_REQUEST: number = 400;

const depthFirstSearch = async ({ request, response }: { request: any; response: any }) => {
    try{
        const body = await request.body();
        const sequences = generateSequenceUsingTree(body.value);
        
        response.body = {test_sequences: sequences};
        response.status = STATUS_OK;
    }catch (error) {
        response.body = {
            message: "Your not send a tree, for more details access: https://github.com/yuryalencar/TeasyFSMGenerator"
        };
        response.status = STATUS_BAD_REQUEST;

        console.log("→ An Error has Ocurred in import of the tree (depthFirstSearch : method) 💥 ");
    }
}

export { depthFirstSearch };
