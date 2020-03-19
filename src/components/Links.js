import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  withRouter
} from "react-router-dom";

class Links extends React.Component {
  renderListOfLinks = () => item => {
    return (
      <li key={item.title}>
        <Link to={`/${item.search}`}>{item.title}</Link>
      </li>
    );
  };
  render() {
    const { itemsObj } = this.props;
    return <ul>{itemsObj.map(this.renderListOfLinks())}</ul>;
  }
}

export default withRouter(Links);
