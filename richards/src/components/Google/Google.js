import React, { Component } from 'react';
import Iframe from "react-iframe";

const Google = () => (
    <Iframe
    width="100%"
    height="100%"
    frameborder="0"
    style="border:0"
    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRwqJiCAPU4cR5NSmcQa9Dt4&key=AIzaSyBPsKKJZej-c8ssGd_BMT7PLpyMk4ZSEeA"
    allowfullscreen
  />
);

export default Google;
