import SocialLinks from "../components/SocialLinks";

function Home() {
  return (
    <div className="sectionWrapper">
      <h2>Hello !</h2>
      <p>
        I'm Vong Jordan - React.js designer and devloper, based in Orléans,
        France
      </p>

      <div className="navBar">
        <div className="navbarContainer" style={{ justifyContent: "start" }}>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Home;
