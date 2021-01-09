import { Router } from 'https://deno.land/x/oak@v5.0.0/mod.ts';
import { depthFirstSearch } from './controllers/teasyGenerator.ts';

const router = new Router();

router.post('/depthFirstSearch', depthFirstSearch);

export default router;
