/**
 * @param {'info' | 'warn' | 'error' | undefined} level
 * @param {'[Server]' | '[Database]'} scope
 * @param {string} message
 */
export const logger = (level, scope, message) => {
  const formatMessage = `${scope}: ${message}`;
  switch (level) {
    case 'error':
      return console.info(`ERROR: ${formatMessage}`);
    case 'warn':
      return console.info(`WARN: ${formatMessage}`);
    case 'info':
    default:
      return console.error(`INFO: ${formatMessage}`);
  }
};
