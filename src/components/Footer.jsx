import link from "../assets/socials/link.png";
import git from "../assets/socials/git.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | Jayaraam</p>
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">Future Bockchain Developer</p>
        <p className="hidden sm:block">Designed by Jayaraam</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://www.linkedin.com/in/jayaraam23/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={link} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://github.com/jayaraam23"
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:spjayaraam2002@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribbble} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:jayaraam2002jr@gamil.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;