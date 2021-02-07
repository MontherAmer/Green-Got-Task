export default (req, res) => {
  // only post request allowed
  if (req.method === "POST") {
    let { firstName, lastName } = req.body;
    // handle missing params
    if (!firstName) res.status(400).json({ error: `firstName is required parameter!` });
    if (!lastName) res.status(400).json({ error: `lastName is required parameter!` });

    res.status(200).json({ payload: `${firstName.toUpperCase()} ${lastName.toUpperCase()}` });
  } else {
    res.status(404).json({ error: `${req.method} ${req.url} does not found` });
  }
};
