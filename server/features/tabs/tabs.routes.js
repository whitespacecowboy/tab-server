import { Router } from 'express';
import { handleTabCreated, handleTabRemoved, handleTabUpdated, handleShowTree, handleGetAll } from './tabs.controller.js';

const router = Router();
router.post('/tabCreated', handleTabCreated);
router.post('/tabRemoved', handleTabRemoved);
router.post('/tabUpdated', handleTabUpdated);
router.get('/tree', handleShowTree);
router.post('/getAll', handleGetAll);

export default router;
