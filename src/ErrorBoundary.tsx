import React from "react";
import { ErrorText } from "./utils/constants";

class ErrorBoundary extends React.Component<{}, { [key: string]: any}> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
      // possible log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // render custom fallback UI
        return <p>{ErrorText.Error} {ErrorText.TryAgain}</p>;
      }
  
      return this.props.children; 
    }
    
  }
  
  export default ErrorBoundary;