export default function Footer(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        paddingTop: "10px",
      }}
    >
      <footer>
        <p style={{ color: "white" }}>
          ©2021 made by
          <span> </span>
          <strong>
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="https://github.com/kattyeye"
            >
              kattyeye
            </a>
          </strong>
        </p>
      </footer>
    </div>
  );
}
