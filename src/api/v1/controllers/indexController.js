import { ResponseConstructor } from '../../../utils/responses.js';

/** @type {import('express').RequestHandler} */
export const indexController = (req, res) => {
  const error = req.query.error === 'true';
  if (error)
    res.json(
      new ResponseConstructor('Task failed successfully', {
        caution:
          'Please use proper status code and not just return errors in response body!',
      }),
    );
  else res.json(new ResponseConstructor('OK, this is fine'));
};
