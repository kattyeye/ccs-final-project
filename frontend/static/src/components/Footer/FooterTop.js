export default function FooterTop(props) {
  return (
    <footer>
      <div className="footertop p-5" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h4> Brand Name </h4>
            </div>
            <div className="col-lg-3 col-sm-2 col-xs-3">
              <h3> Contact </h3>
              <ul>
                <li>
                  <a className="email" href="#">
                    insert email here
                  </a>
                </li>
                <br />
                <li>
                  <p> address line one </p>
                </li>
                <li>
                  <p> address line two </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-2 col-xs-3">
              <ul>
                <li>
                  <h5>
                    <a href="#"> ABOUT US</a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="#"> CURRENT SERIES </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="#"> THE HOUSE </a>
                  </h5>
                </li>
                <li>
                  <h5>
                    <a href="#"> LOOKING BACK </a>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
