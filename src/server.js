import { app, HOSTNAME, PORT } from './app.js';

app.listen(PORT, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(`Server is running on ${HOSTNAME}:${PORT}`);
});
