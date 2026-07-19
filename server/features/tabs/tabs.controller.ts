export const handleTabCreated = (req: any, res: any): void => {
  console.log(req.body);
  // TODO: save to DB via tabs.model.js
  res.status(200).json({ message: 'Tab created event received' });
};

export const handleTabRemoved = (req: any, res: any): void => {
  console.log(req.body);
  res.status(200).json({ message: 'Tab removed event received' });
};

export const handleTabUpdated = (req: any, res: any): void => {
  console.log(req.body);
  res.status(200).json({ message: 'Tab updated event received' });
};
