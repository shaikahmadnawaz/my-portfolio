function Experience() {
  return (
    <div id="#experience" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Experience</h1>
        <p className="text-lg text-black mb-8 md:text-center">
          Check out my professional experience below.
        </p>

        <div className="grid grid-cols-2 h-full w-full gap-6 items-center justify-center">
          {" "}
          <div className="flex max-w-2xl h-full flex-col items-center rounded-md border md:flex-row shadow-sm">
            <div className="h-full md:w-[400px] w-full p-2">
              <img
                src="./mybizzerp.svg"
                alt="Atoms Digital Solutions logo"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <div className="p-4">
                <h2 className="inline-flex items-center text-lg font-semibold">
                  Associate Software Developer
                </h2>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="flex flex-col">
                    <span className="text-[10px] font-medium text-black">
                      Drag and Drop India Private Limited
                    </span>
                    {/* Utility to calculate itself */}
                    <span className="text-[8px] font-medium text-black">
                      Apr 2024 - Present
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-sm text-black text-justify">
                  <p>
                    Developed the landing page for{" "}
                    <span className="font-semibold">MyBizz ERP</span> using{" "}
                    <span className="font-semibold">React</span>, improving load
                    speed by <span className="font-semibold">15%</span>.
                    I&apos;m currently building{" "}
                    <span className="font-semibold">Sathvar</span>, a service
                    based marketplace with{" "}
                    <span className="font-semibold">Next.js</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* First Experience */}
          <div className="flex max-w-2xl h-full flex-col items-center rounded-md border md:flex-row shadow-sm">
            <div className="h-full md:w-[400px] w-full p-2">
              <img
                src="./atoms.jpg"
                alt="Atoms Digital Solutions logo"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <div className="p-4">
                <h2 className="inline-flex items-center text-lg font-semibold">
                  Full Stack Development Intern
                </h2>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="flex flex-col">
                    <span className="text-[10px] font-medium text-black">
                      Atoms Digital Solutions
                    </span>
                    <span className="text-[8px] font-medium text-black">
                      Mar 2023 - Sep 2023
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-sm text-black text-justify">
                  <p>
                    Developed three websites using the{" "}
                    <span className="font-semibold">MERN stack</span> and{" "}
                    <span className="font-semibold">AWS</span>, helping Atoms
                    Group improve their{" "}
                    <span className="font-semibold">
                      online visibility by 20%
                    </span>{" "}
                    and achieve a{" "}
                    <span className="font-semibold">
                      15% increase in client engagement
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second Experience */}
          <div className="flex max-w-2xl h-full flex-col items-center rounded-md border md:flex-row shadow-sm">
            <div className="h-full w-full md:w-[400px] p-2">
              <img
                src="./open-source.webp"
                alt="Open Source Contributor logo"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <div className="p-4">
                <h2 className="inline-flex items-center text-lg font-semibold">
                  Open Source Contributor
                </h2>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="flex flex-col">
                    <span className="text-[10px] font-medium text-black">
                      Time Chain Labs, Node.js, Dart, BioDrop, and more
                    </span>
                    <span className="text-[8px] font-medium text-black">
                      Apr 2023 - Present
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-sm text-black text-justify">
                  <p>
                    Contributed to the <strong>Bitcoin Token Standards</strong>{" "}
                    at Time Chain Labs, as well as key projects like{" "}
                    <strong>Node.js</strong>, <strong>Dart docs</strong>,{" "}
                    <strong>BioDrop</strong>, and <strong>SeamlessUI</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
