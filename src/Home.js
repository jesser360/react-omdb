import React, { Component } from 'react';
import SearchContainer from "./containers/SearchContainer"
import styles from './index'

class Home extends Component {
  render() {
    return (
      <div style={styles.transparentBg} className="jumbotron col-sm-12 text-center">
        <h1><a href="/">OMDB React</a></h1>
        <div className="col-sm-12" style={styles.space}>
          <SearchContainer />
        </div>
      </div>
    );
  }
}

export default Home;
