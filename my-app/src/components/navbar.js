export const NavBar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <div>
          <p style={{ fontSize: "20px", fontWeight: "600", marginTop: "15px" }}>
            OMA Studio
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="https://seville-store.com/"
            >
              Seville
            </a>
          </p>
          <p>
            <a
              href="https://livingarchive.centrinno.eu/"
              style={{ color: "black", textDecoration: "none" }}
            >
              Centrino
            </a>
          </p>
          <p>
            <a
              href="https://neuehaus.io/"
              style={{ color: "black", textDecoration: "none" }}
            >
              NeueHaus
            </a>
          </p>
        </div>
      </div>
      <hr style={{ height: "3px", backgroundColor: "black" }} />
    </div>
  )
}
