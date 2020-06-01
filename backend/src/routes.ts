import { Router }from 'https://deno.land/x/oak/mod.ts';
import { depthFirstSearch } from './controllers/teasyGenerator.ts';

const router = new Router();

router.post('/depthFirstSearch', depthFirstSearch);

export default router;
