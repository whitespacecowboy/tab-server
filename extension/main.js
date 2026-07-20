import { tabCreatedListener, tabUpdatedListener, tabRemovedListener } from './module/listner.js'
const PORT = 3000

tabRemovedListener(PORT)
tabCreatedListener(PORT)
tabUpdatedListener(PORT)
