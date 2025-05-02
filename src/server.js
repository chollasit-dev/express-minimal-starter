import { app } from './app.js';
import { config } from './config/env.js';

const { HOSTNAME, PORT } = config;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(`Server is running on ${HOSTNAME}:${PORT}`);
});
