import {Router} from 'express'
import {completeOrder,  getOrdersCompleted, postOrder, updateOrder } from '../controllers/order';


const router = Router();

router.get('/', getOrdersCompleted)
router.post("/", postOrder)
router.put("/:id", completeOrder)

export default router;

