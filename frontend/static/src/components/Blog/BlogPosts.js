export default function BlogPosts() {
  return (
    <div className="container-fluid content">
      <section className="blog-hero-section">
        <img
          id="hero-img"
          src="https://www.rollingstone.com/wp-content/uploads/2018/06/steely-dan-essential-songs-2017-listen-23e00365-05ec-4359-ab0a-f89c092213bc.jpg"
          alt="Steely Dan"
        />
      </section>
      <section className="text">
        <h6>SUBTITLE</h6>
        <h2>TITLE HERE</h2>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt, ex quis faucibus mattis, elit nulla tincidunt urna, quis
          semper enim dolor tristique ante. Duis sit amet elementum orci,
          convallis sollicitudin diam. Maecenas venenatis, erat ac interdum
          fringilla, tellus tortor bibendum tortor, scelerisque maximus orci
          orci vitae tellus. Integer feugiat ullamcorper felis a malesuada. Nunc
          sit amet augue vitae ligula volutpat dictum . . .
        </p>
        <button href="#" className="btn cont-button">
          Continue Reading
        </button>
        <div className="bar"></div>
        <div id="article-footer">
          <span>By Kat On Nov 8, 2021</span>
          <ul className="icons-footer">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
