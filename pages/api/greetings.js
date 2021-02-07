export default (req, res) => {
  let { first_name } = req.query;

  res.status(200).json({ payload: `Hello ${first_name}!` });
};
