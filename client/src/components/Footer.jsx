const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="text-white text-sm">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/shaikahmadnawaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold underline"
            >
              Me
            </a>
            . Source code available on{" "}
            <a
              href="https://github.com/shaikahmadnawaz/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
