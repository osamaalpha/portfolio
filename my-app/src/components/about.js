import "./about.css"

export const About = () => {
  return (
    <div>
      <ul>
        <li
          style={{
            width: "150px",
            fontSize: "20px",
            fontWeight: "500",
            textAlign: "left",
          }}
        >
          About
        </li>
      </ul>
      <div className="about-section">
        <img className="img-about" src="/osamaImg.jpeg" />
        <div className="separate-line"></div>
        <h4
          style={{
            textAlign: "left",
            fontSize: "20px",
            lineHeight: "2",
            letterSpacing: "2px",
          }}
        >
          2-3 years of experience in building and maintaining production
          applications. Worked both on the frontend and backend.Experienced in
          building e-commerce websites.
        </h4>
      </div>
      <hr style={{ height: "3px", backgroundColor: "black" }} />
    </div>
  )
}
