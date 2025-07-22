function Contact() {
  return (
    <div style={{ margin: "1rem", padding: "1rem" }}>
      <h3 style={{ fontSize: "32px" }}>Contact</h3>
      <p style={{ textAlign: "justify", lineHeight: "1.6", maxWidth: "800px" }}>
        Let's Work Together !
      </p>
      <div className="navBar">
        <div className="navbarContainer" style={{ justifyContent: "start" }}>
          <p>Github</p>
          <p>LinkedIn</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
