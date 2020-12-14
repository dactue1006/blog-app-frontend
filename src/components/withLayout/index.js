import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const withLayout = (WrappedComponent, params = { isShowFooter: true }) => {
  class HOC extends React.Component {
    render() {
      const { isShowFooter } = params;
      return (
        <div className="d-flex flex-column h-100">
          <Header />
          <WrappedComponent {...this.props} />
          { isShowFooter && <Footer />}
        </div>
      )
    }
  }
  return HOC;
};

export default withLayout;