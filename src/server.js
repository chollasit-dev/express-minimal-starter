import { app } from './app.js';
import { initializeDb } from './config/db.js';
import { config } from './config/env.js';

await initializeDb();

const { HOSTNAME, PORT } = config;
app.listen(PORT, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(`Server is running on ${HOSTNAME}:${PORT}`);
});
