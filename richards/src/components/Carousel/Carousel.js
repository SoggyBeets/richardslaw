import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://www.visitogden.com/imager/s3-us-west-1_amazonaws_com/ogden-craft/craft/historic_25th_street_december_2016_1694e1b2ccd168cee29a0179df2a7819.png"
    // altText: "Slide 1",
    // caption: "Slide 1"
  },
  {
    src:
      "https://media.deseretdigital.com/file/001f088444?crop%3Dtop%3A0%7Cleft%3A0%7Cwidth%3A620%7Cheight%3A330%7Cgravity%3ACenter%26quality%3D55%26interlace%3Dnone%26resize%3Dwidth%3A620%26order%3Dresize%2Ccrop%26c%3D14%26a%3D0fab10fb"
    // altText: "Slide 2",
    // caption: "Slide 2"
  },
  {
    src:
      "https://www.visitogden.com/imager/s3-us-west-1_amazonaws_com/ogden-craft/craft/25th_high_res_file_1694e1b2ccd168cee29a0179df2a7819.jpg"
    // altText: "Slide 3",
    // caption: "Slide 3"
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Example;
