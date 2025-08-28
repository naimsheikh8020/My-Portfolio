import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import ElectricBorder from "../components/Animations/ElectricBorder/ElectricBorder";
import FallingText from "../components/FallingText/FallingText";

const About = () => {
  const grid2Container = useRef();
  return (
    <>
      <section
        className="c-space section-spacing z-10 relative container mx-auto"
        id="about"
      >
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
          {/* Grid 1 */}
          <div className="flex items-end grid-default-color grid-1 cursor-target">
            <img
              src="assets/coding-pov.png"
              className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            />
            <div className="z-10">
              <p className="headtext">Hi, I'm Naim</p>
              <p className="subtext">
                Over the last 2 years, I developed my frontend and backend dev
                skills to deliver dynamic and software and web applications.
              </p>
            </div>
            <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
          </div>
          {/* Grid 2 */}
          <div className="grid-default-color grid-2 cursor-target">
            <div
              ref={grid2Container}
              className="flex items-center justify-center w-full h-full"
            >
              <p className="flex items-end text-5xl text-gray-500">
                CODE IS CRAFT
              </p>
              <Card
                style={{ rotate: "15deg", top: "20%", left: "15%" }}
                text={"Full Stack Developer"}
                // image={
                //   "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
                // }
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-25deg", top: "65%", left: "35%" }}
                text={"React Developer"}
                // image={
                //   "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
                // }
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "60deg", top: "30%", left: "75%" }}
                text={"Mern Stack Developer"}
                // image={
                //   "https://miro.medium.com/v2/resize:fit:576/1*yqQpg5pkNNY2NCdcmqVstw.png"
                // }
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-40deg", top: "55%", left: "5%" }}
                text={"Backend Developer"}
                // image={
                //   "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
                // }
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "25deg", top: "12%", left: "45%" }}
                text={"Wordpress Designer"}
                // image={
                //   "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
                // }
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "40deg", top: "75%", left: "65%" }}
                text={"Shopify Developer"}
                // image="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                containerRef={grid2Container}
              />
              {/* <Card
                style={{ rotate: "-30deg", top: "70%", left: "20%" }}
                image="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-20deg", top: "8%", left: "8%" }}
                image="https://img.icons8.com/?size=100&id=13631&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "35deg", top: "18%", left: "80%" }}
                image="https://img.icons8.com/?size=100&id=13664&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "50deg", top: "5%", left: "60%" }}
                image="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-50deg", top: "38%", left: "70%" }}
                image="https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-35deg", top: "58%", left: "55%" }}
                image="https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000"
                containerRef={grid2Container}
              /> */}
            </div>
          </div>
          {/* Grid 3 */}

          <div className="grid-black-color grid-3 cursor-target">
            <FallingText
              text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
              highlightWords={[
                "React",
                "Bits",
                "animated",
                "components",
                "simplify",
              ]}
              highlightClass="highlighted"
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>
          {/* Grid 4 */}
          <div className="grid-4 h-full cursor-target">
            <ElectricBorder style={{ borderRadius: 16, height: "100%" }}>
              <div className="p-10 pt-20 flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">
                  Do you want to start a project together?
                </p>
                <CopyEmailButton />
              </div>
            </ElectricBorder>
          </div>
          {/* Grid 5 */}
          <div className="grid-default-color grid-5 cursor-target">
            <div className="z-10 w-[50%]">
              <p className="headText">Teck Stack</p>
              <p className="subtext">
                I specialize in a variety of languages, frameworks, and tools
                taht allow me to build robust and scalable applications
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Frameworks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
