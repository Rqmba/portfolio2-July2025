function SocialLinks() {
  const links = [
    { label: "Email", url: "mailto:jvongpro@mail.com" },
    { label: "Github", url: "https://github.com/Rqmba" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jordan-vong-05aa4a266/",
    },
    { label: "Blog", url: "https://portfolio-vong-reactjs.vercel.app/" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

export default SocialLinks;
