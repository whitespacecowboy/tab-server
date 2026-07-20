export const handleTabCreated = (req, res) => {
  console.log(req.body);
  // TODO: save to DB via tabs.model.js
  res.status(200).json({ message: 'Tab created event received' });
};

export const handleTabRemoved = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Tab removed event received' });
};

export const handleTabUpdated = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Tab updated event received' });
};
