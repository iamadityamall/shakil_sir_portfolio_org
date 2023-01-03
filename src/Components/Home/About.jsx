import React from "react";
import aboutImage from "../../assests/images/male_model.jpeg";
import { useSelector } from "react-redux";
import { CV } from "../../assests/images";

const About = () => {
  const { isDarkmode } = useSelector((store) => store.navbar);
  return (
    <section
      id="about"
      className="transition-all duration-200 ease-in-out grid grid-cols-1 gap-y-5 justify-items-center  md:grid-cols-2 md:gap-y-0 md:gap-x-2 md:h-screen md:place-items-center"
    >
      {/* image container */}
      <figure
        data-aos="fade-in"
        className="transition-all duration-200 ease-in-out overflow-hidden rounded-full w-[200px] h-[200px] md:w-full md:h-auto  md:mr-0 md:rounded-xl xl:h-[70vh] xl:w-fit"
      >
        <img
          src={aboutImage}
          alt="about"
          className="transition-all duration-200 ease-in-out  w-full h-full object-contain grayscale z-0"
        />
      </figure>
      {/* info container */}
      <div
        data-aos="fade-in"
        className="transition-all duration-700 ease-in-out flex flex-col items-center space-y-10  p-4 md:space-y-4 md:p-2 md:items-start "
      >
        <div className="transition-all duration-700 ease-in-out flex justify-start">
          <h1 className="transition-all duration-700 ease-in-out font-bold font-poppins text-4xl py-1 border-b-4 border-black xl:text-6xl">
            About Me
          </h1>
          {/* <p>Aditya Mall</p> */}
        </div>
        <div className="transition-all duration-500 ease-in-out flex flex-col space-y-2 font-poppins text-sm md:text-justify md:p-2 xl:p-0 xl:text-lg">
          <p>
            10+ years of expertise in selling software technologies to Banking
            and Financial Institutions, Large Enterprises clients.• 9+ years of
            expertise in the Indian, Middle Eastern, and East Africa markets
            selling software technologies to Banking and Financial Institutions,
            Large Enterprises clients. Experience with the most recent
            technologies, a consultative approach to market account management,
            a deep understanding of account handling, lead generation,
            opportunity management, project management to closing, and a strong
            ability to explain complex solutions in a straightforward manner
            with a track record of consistently hitting goals are all desirable
            qualifications.
          </p>
          <p>
            Complete Knowledge of account management cycle for BFSI Blockchain,
            NPA, NACH, Aadhar Masking, Q-Verifier, Digital KYC, LOS, Analytics,
            CMS, CMM, Kiosk/Queue Management, Digital Transformation, HSM,
            Aadhar Data Vault, Cheque Transaction System, Finacle services ,
            Chabot, CRM, Payment solutions, API Management, Business Process
            Automation, Robotic Process Automation, Core Banking Integration,
            HRMS, E-Scan, Cyber Security.{" "}
            {/* <span className="text-gray-800 font-semibold">
              <a
                href="https://linkedin.com/in/adityaharendramall/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </span>{" "}
            where I post useful content related to Web Development and
            Programming */}
          </p>
          {/* <p>
            I'm open to <span className="text-gray-800 font-semibold">Job</span>{" "}
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to{" "}
            <span className="text-gray-800 font-semibold">contact me</span>.
          </p> */}
        </div>
        <button
          className={`transition-all duration-500 ease-in-out p-4 bg-black text-white font-poppins rounded-lg w-full md:w-auto ${
            isDarkmode && "bg-white text-black"
          }`}
        >
          <a href={CV} target="_blank" rel="noreferrer">
            Resume
          </a>
        </button>
      </div>
    </section>
  );
};

export default About;
