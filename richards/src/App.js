import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Google from "./components/Google";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import Carousel from "./components/Carousel";
// import MissionStatement from "./components/MissionStatement";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />

        {/* </div> */}
        <section id="tabSection">
          {/* <MissionStatement /> */}

          <Tabs>
            <div label="injuryLaw">
              <p>
                If you’ve been injured in Utah, through an accident or by
                someone else’s negligence; it may seem impossible to get your
                life back on track. Sadly, you would not believe the games
                insurance companies will play, and the efforts they will go
                through to prevent you from seeking legal protection for
                yourself. With Injuries, there’s no time for games. RBR Law will
                be aggressive with the Insurance Company, and help you get
                compensation for your injuries. We give you a fighting chance
                against the big money in Insurance, so you can get your life
                back, and the justice you deserve.
              </p>
            </div>

            <div label="familyLaw">
              <p>
                Facing a divorce or a domestic dispute is hard; You’re about to
                be in the fight of your life. Divorce, custody, and other family
                changes need to be handled by council with real experience in
                Utah. RBR has helped people just like you through the most
                painful times of their lives with grace and strength. If you've
                come to need help with difficult family circumstances, we'd like
                you to consider our help. When it comes to your kids, your home,
                and the life you’ve worked so hard to build, you need a Law Firm
                that Aggressively protects your future.
              </p>
            </div>
            <div label="bankruptcyLaw">
              <p>
                If you have Bill Problems you probably have a lot of questions
                like: Will I lose my home? Creditors are so aggressive! Can they
                Really Call Me At Work? What about my retirement? At RBR we’ve
                helped hundreds of people get their Bill Problems taken care of,
                reduce stress, and get back peace of mind. Even if you’re facing
                a foreclosure, dealing with the IRS on back-taxes, or have been
                told by Bill Collectors that you can’t file bankruptcy, we have
                a solution. We get Aggressive with your creditors so they stop
                harassing you, and you get to move on with a fresh start.
              </p>
            </div>
            <div label="duiLaw">
              <p>
                If you’ve been accused of driving under the influence, you are
                guaranteed to have the State, the City, the Police and the
                Prosecution come after you AGGRESSIVELY. Every second counts,
                and your Lawyer’s experience counts. Your future, your job, your
                right to drive – depends on it. With RBR Law you get an
                Aggressive defense and an Advocate for the protection of your
                Rights.
              </p>
            </div>
          </Tabs>
        </section>

        <AboutUs />

        <div class="container">
          <div class="row">
            <div class="col">
              <Google />
            </div>
            <div class="col">
              <Form />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col">
              <Facebook />
            </div>
            <div class="col">
              <Instagram />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
