/** @type {import('express').RequestHandler} */
export const indexController = (req, res) => {
  const error = req.query.error === 'true';
  if (error) res.send('Task failed successfully');
  else res.sendStatus(200);
};
