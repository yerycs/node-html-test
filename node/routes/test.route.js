import { Router } from 'express';
import * as TestController from '../controllers/test.controller';

const router = Router(); // eslint-disable-line new-cap

router.route('/getItems')
    .get(TestController.getItems);

export default router;
