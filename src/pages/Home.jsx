import SocialLinks from "../components/SocialLinks";

function Home() {
  return (
    <section id="section" className="sectionWrapper">
      <h1>Hello !</h1>
      <p>
        I'm Vong Jordan - React.js designer and devloper, based in Orléans,
        France
      </p>

      <div className="navBar">
        <div className="navbarContainer" style={{ justifyContent: "start" }}>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

export default Home;
