import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";

class Routes extends React.Component {
  render() {
    const { itemsObj } = this.props;
    return itemsObj.map((e, i) => {
      return <Route path={`/${e.search}`} component={e.component} key={i} />;
    });
  }
};

export default withRouter(Routes);
