import { Router } from 'express';
import { handleTabCreated, handleTabRemoved, handleTabUpdated, showTree } from './tabs.controller.js';

const router = Router();
router.post('/tabCreated', handleTabCreated);
router.post('/tabRemoved', handleTabRemoved);
router.post('/tabUpdated', handleTabUpdated);
router.get('/show', showTree);

export default router;
