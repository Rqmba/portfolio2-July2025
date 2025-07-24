import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footerText">
        © {new Date().getFullYear()} Jordan Vong — Built with React.js
      </p>
    </footer>
  );
}

export default Footer;
