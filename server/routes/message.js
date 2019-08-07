import messageController from '../controllers/messageController';
import express from 'express';

const router = express.Router();

router.get('/', messageController.getAll);
router.get('/:message_id', messageController.getUnique);
router.post('/', messageController.sendToAll);
router.post('/:receiver', messageController.directSend);

export default router;