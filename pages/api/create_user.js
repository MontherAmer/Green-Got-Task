export default (req, res) => {
  let { firstName, lastName } = req.body;
  console.log("BBBBBBBBBBbb ", req.body);
  res.status(200).json({ payload: `${firstName.toUpperCase()} ${lastName.toUpperCase()}` });
};
