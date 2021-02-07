export default (req, res) => {
  // only GET is allowed
  if (req.method === "GET") {
    let { first_name } = req.query;
    // handle missing params
    if (!first_name || !first_name.length) res.status(400).json({ error: `first_name is required parameter!` });

    res.status(200).json({ payload: `Hello ${first_name}!` });
  } else {
    res.status(404).json({ error: `${req.method} ${req.url} does not found` });
  }
};
