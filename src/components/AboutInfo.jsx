import React from "react";
import { FaMedium } from "react-icons/fa6";
import { FaStackOverflow, FaGithub } from "react-icons/fa";
import Image from "react-bootstrap/Image";

const AboutInfo = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5 flex-column gap-4">
      <h3 className="text-center text-success mt-4">
        A passionate FullStack Developer
      </h3>
      <div>
        <Image
          src="./img/becooOn.png"
          roundedCircle
          width={"200px"}
          alt="becooOn"
          className="text-bg-success image-animation"
        />
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/BecooOn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-dark" />
        </a>
        <a href="https://medium.com/@becooOn">
          <FaMedium className="text-dark" />
        </a>
        <a href="https://stackoverflow.com/users/23137995/becooon">
          <FaStackOverflow className="text-warning" />
        </a>
      </div>
    </div>
  );
};

export default AboutInfo;
