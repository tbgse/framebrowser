import React from "react";
import { Layout, Header } from "./components";
import { getAllFrames } from "./services";
import { connect } from "react-redux";
import { setFrameData } from "./redux/actions";
import { DiscoveryView } from "./views/DiscoveryView";
import { ProductView } from "./views/ProductView";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Router>
          <Header />
          <Route exact path="/" component={DiscoveryView} />
          <Route path="/product/:productId" component={ProductView} />
        </Router>
      </Layout>
    );
  }

  handleFrameLoad(frameData) {
    this.props.setFrameData(frameData);
  }

  componentDidMount() {
    getAllFrames()
      .then(res => {
        this.handleFrameLoad(res.data);
      })
      .catch(err => {
        console.log(err);
        // errors could be handled here to display that we ran into API issues
      });
  }
}

export default connect(
  null,
  { setFrameData }
)(App);
