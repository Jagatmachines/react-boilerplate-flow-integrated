import * as React from 'react';
import type { IErrorBoundariesProps, IErrorBoundariesStates } from './types';
import { showNotification } from '../../../utils/notification';

class ErrorBoundary extends React.Component<IErrorBoundariesProps, IErrorBoundariesStates> {
  constructor(props: IErrorBoundariesProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log('Error in the App', error, 'Info', info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      showNotification('Oops! Something went wrong. Please Refresh the page again.', true);
      // return <h1>Oops! Something went wrong. Please Refresh the page again.</h1>;
      return '';
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
