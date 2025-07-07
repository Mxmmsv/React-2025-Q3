import { Component } from 'react';

class ErrorFallback extends Component {
  render() {
    return (
      <div className="p-10 text-center text-xl text-red-600">
        <p>smth went wrong =*_*=</p>
      </div>
    );
  }
}

export default ErrorFallback;
