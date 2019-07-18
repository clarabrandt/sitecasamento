import * as React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  render() {
    const { children } = this.props;
    const portalRoot = document.getElementById('portal-root');
    return ReactDOM.createPortal(children, portalRoot);
  };
};

export default Portal;
