import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="text-white text-sm">
            Made with 🤍 by{" "}
            <a
              href="https://www.linkedin.com/in/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:underline"
            >
              Shaik Ahmad Nawaz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
