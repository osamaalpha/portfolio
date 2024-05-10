import "./contact.css"

export const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "400px",
      }}
    >
      <ul>
        <li
          style={{
            width: "150px",
            fontSize: "20px",
            fontWeight: "500",
            textAlign: "left",
          }}
        >
          Contact Me
        </li>
      </ul>
      <div style={{ marginLeft: "20px" }}>
        <h1 style={{ width: "200px" }}>Get In Touch</h1>
        <div style={{ display: "flex", gap: "15px" }} className="contact-block">
          <h2>omastudios24@gmail.com</h2>
          <h2>+31684568942</h2>
          <h2>
            <a
              style={{ color: "black" }}
              href="https://drive.google.com/file/d/1PVaJ4YnuPXa-0AlLKXd17DFnV72_kgKo/view?usp=sharing"
            >
              Resume
            </a>
          </h2>
        </div>
      </div>
    </div>
  )
}
