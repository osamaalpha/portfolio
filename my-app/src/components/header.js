import "./header.css"
export const Header = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "20px",
        }}
        className="animated-title"
      >
        <div className="text-top">
          <div>
            <span>OMA Studio</span>
            <span>For Building Software Applications</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>Building Modern Websites And Mobile Applications</div>
        </div>
      </div>
      <hr style={{ height: "3px", backgroundColor: "black" }} />
    </div>
  )
}
