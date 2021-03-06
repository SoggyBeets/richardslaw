import React, { Component } from "react";
// import { StreamApp, Activity, FlatFeed } from "react-activity-feed";
import "react-activity-feed/dist/index.css";
import "../Social.scss";

class Facebook extends Component {
  render() {
    return (
      <div
        className="facebookContainer"
        data-href="https://www.facebook.com/RBRlawgroup/"
        data-tabs="timeline"
        data-width="500"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/RBRlawgroup/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/RBRlawgroup/">Facebook</a>
        </blockquote>
      </div>
    );
  }
}

export default class FacebookFeed extends Component {
  constructor(props) {
    super(props);
    this.feed = null;
    this.state = {};
  }

  componentDidMount() {
    // this.feed = Facebook;
  }
  render() {
    return (
      <div >
        <Facebook />
      </div>
    );
  }
}
