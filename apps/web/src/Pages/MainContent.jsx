import "../Components/NightSky.css";
import LinkButton from "../Components/LinkButton.jsx";
const MainContent = () => {
  return (
    <section className="z-0 wrapper pt-20 sm:flex flex-auto ">
      <div id="stars"></div>
      <div id="stars2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center h-[100%`] pl-4 sm:pl-[5rem] text-white font-courier_new">
        <div className="z-0 grid place-content-center max-w-full sm:max-w-[70%] sm:leading-loose pb-10">
          <h1 className="text-6xl font-minecraft sm:text-7xl">
            Introducing CAML
          </h1>
          <p className="m-10 sm:text-[1.2rem]">
            Unlock learning like never before! Dive into a collaborative
            platform that gathers notes, projects, and PYQs, while gamifying
            your experience with AI-driven games to boost engagement and
            mastery.
          </p>
          <LinkButton toPath="auth" text="Start Exploring" />
        </div>
        <div className="z-0 text-xl sm:text-4xl text-left">
          <h1 className=" text-4xl">CAML = {"{"}</h1>
          <p className="text-vsred">
            &nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;:&nbsp;Collect,
          </p>
          <p className="text-vsskyblue">
            &nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;:&nbsp;Arrange,
          </p>
          <p className="text-vscyan">
            &nbsp;&nbsp;&nbsp;&nbsp;M&nbsp;:&nbsp;Modify,
          </p>
          <p className="text-vsgreen">
            &nbsp;&nbsp;&nbsp;&nbsp;L&nbsp;:&nbsp;Learn
          </p>
          <h1>{"}"}</h1>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
