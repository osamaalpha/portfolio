import "./projects.css"

export const Projects = () => {
  const projectsArray = [
    {
      header: "Sevilla",
      description:
        "Custom Shopify App For A Fashion Brand Built With NextJs And Integtrated With Shopify Platform And Sanity(CMS).",
      picture: "/seville.png",
      url: "https://seville-store.com/",
    },
    {
      header: "Centrino",
      description:
        "Project Connecting Local Stories From (Post)-Industrial Sites To Inspire A Circular And Inclusive Future In Europe Funded By European Union Built With React and Sanity(CMS).",
      picture: "/centrino.png",
      url: "https://livingarchive.centrinno.eu/",
    },
    {
      header: "NeueHaus",
      description:
        "Landing Page For A Freelanceing Website Build With Sveltkit, Sanity(CMS), Firebase.",
      picture: "/neuehaus.png",
      url: "https://neuehaus.io/",
    },
  ]
  return (
    <div>
      {projectsArray.map((project, index) => {
        return (
          <div>
            <div key={index} className="project-section">
              <div style={{ width: "500px" }}>
                <h2 style={{ textAlign: "left" }}>{project.header}</h2>
                <h4 className="project-description">{project.description}</h4>
                <a
                  href={project.url}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "200px",
                  }}
                >
                  <button className="view-project-button">View Project</button>
                </a>
              </div>
              <div className="separate-line"></div>
              <div>
                {" "}
                <img className="project-img" src={project.picture} />
              </div>
            </div>
            <hr style={{ height: "1px", backgroundColor: "black" }} />
          </div>
        )
      })}
    </div>
  )
}
