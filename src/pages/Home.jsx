function Home() {
  return (
    <div style={{ margin: "1rem", padding: "1rem" }}>
      <h2 style={{ fontSize: "48px" }}>Hello !</h2>
      <p style={{ fontSize: "48px" }}>
        I'm Vong Jordan - React.js designer and devloper, based in Orléans,
        France
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "8rem",
        }}
      >
        {" "}
        <p>Github</p>
        <p>LinkedIn</p>
        <p>Blog</p>
      </div>
    </div>
  );
}

// .navbarContainer {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: end;
//   gap: 4rem;
// }

export default Home;
