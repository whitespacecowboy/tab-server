import { Router } from 'express';
import { handleTabCreated, handleTabRemoved, handleTabUpdated } from './tabs.controller.ts';

const router = Router();
router.post('/tabCreated', handleTabCreated);
router.post('/tabRemoved', handleTabRemoved);
router.post('/tabUpdated', handleTabUpdated);

export default router;
