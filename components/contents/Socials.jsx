"use client";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    path: "https://www.upwork.com/freelancers/arisqisetyawan",
    name: <FontAwesomeIcon icon={faUpwork} />,
  },
  {
    path: "https://www.linkedin.com/in/arisqi-setyawan/",
    name: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    path: "https://github.com/Aries1711",
    name: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    path: "https://www.instagram.com/arisqisetyawan/",
    name: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    path: "https://www.facebook.com/vladimir.ariesneski/",
    name: <FontAwesomeIcon icon={faFacebook} />,
  },
];

const Socials = ({ containerStyles, IconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${IconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
