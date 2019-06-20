import React, { Component } from "react";
import { StreamApp, Activity, FlatFeed } from "react-activity-feed";
import "react-activity-feed/dist/index.css";

export default class FacebookFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}
  render() {
    return (
      //  <div className="elfsight-app-e368cb13-615c-49ad-9689-b81caeafee2f" id="fbfeed"/>
      <StreamApp
        apiKey="3fjzn67nznwt"
        appId="41814"
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZXhhbXBsZS11c2VyIn0.XEKjtzD2AIQMLXH6kfJlL8P_JV4CBYvcMsmQCFjyY2U"
      >
        <FlatFeed
          Activity={props => (
            <Activity
              {...props}
              onClickHashtag={word => console.log(`clicked on ${word}`)}
              onClickMention={word => console.log(`clicked on ${word}`)}
            />
          )}
        />
      </StreamApp>
    );
  }
}
