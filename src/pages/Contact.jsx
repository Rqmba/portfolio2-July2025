import SocialLinks from "../components/SocialLinks";

function Contact() {
  return (
    <div className="sectionWrapper">
      <h2>Contact</h2>
      <p style={{ textAlign: "justify", lineHeight: "1.6", maxWidth: "800px" }}>
        Let's Work Together !
      </p>
      <div className="navBar">
        <div className="navbarContainer" style={{ justifyContent: "start" }}>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Contact;
