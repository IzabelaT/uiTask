import React from "react";
import { Carousel, Panel } from "rsuite";
import { FaGithub } from "react-icons/fa";
function About() {
  return (
    <div style={{ margin: "1rem" }}>
      <div style={{}}>
        <Carousel
          shape={"bar"}
          className="custom-slider"
          autoplay
          autoplayInterval={2500}
        >
          <span className="carouselItem">Hey</span>
          <span className="carouselItem">
            just a simple beautiful task manager
          </span>
          <span className="carouselItem">check the github repo :)</span>
        </Carousel>
        <br></br>
        <br></br>
        <Panel header="About Ui Task Manager v0.1" bordered>
          <p>
            uiTask also User Interface Task Manager is a simple task manager created with functionality in mind.
            Create tasks, track their progresses and access them anywhere from
            any device with auto sync!
          </p>
          <p>
            This client app is built using React with React Suite, Redux, and
            React Router. Sync is enabled using the Google Drive API.
          </p>
          <div
            style={{
              padding: "1rem 0 0",
              textAlign: "center",
              display: "flex",
              alignContent: "center",
            }}
          >
            <FaGithub style={{ fontSize: "18px" }} />{" "}
            <a style={{padding: "0 0.5rem"}} target="_blank" href="https://github.com/IzabelaT/uiManager">Github</a>
          </div>
        </Panel>
      </div>
    </div>
  );
}

export default About;
