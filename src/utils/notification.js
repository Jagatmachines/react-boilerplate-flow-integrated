import Noty from 'noty';

/**
 * Create a new alert with given type and message
 *
 * @param {string} type
 * @param {string} text
 * @param {Object} options
 */
export const showNotification = (message: string, error: boolean) => {
  return new Noty({
    type: error ? 'error' : 'success',
    timeout: 5000,
    layout: 'topCenter',
    text: message,
    closeWith: ['button']
  }).show();
};
