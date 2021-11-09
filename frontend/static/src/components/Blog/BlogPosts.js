import BlogPageTitle from "./PageTitle";

export default function BlogPosts() {
  return (
    <>
      <BlogPageTitle />
      <div className="blog-holder container-fluid mt-5">
        <div className="container-fluid content">
          <section className="blog-hero-section">
            <img
              id="hero-img"
              src="https://images.unsplash.com/photo-1623863774468-7741435322e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80"
              alt="Greenville, SC"
            />
          </section>
          <section className="text">
            <h6>SUBTITLE</h6>
            <h2>TITLE HERE</h2>
            <p className="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt, ex quis faucibus mattis, elit nulla tincidunt urna,
              quis semper enim dolor tristique ante. Duis sit amet elementum
              orci, convallis sollicitudin diam. Maecenas venenatis, erat ac
              interdum fringilla, tellus tortor bibendum tortor, scelerisque
              maximus orci orci vitae tellus. Integer feugiat ullamcorper felis
              a malesuada. Nunc sit amet augue vitae ligula volutpat dictum . .
              .
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
        <aside className="aside-container">
          <section className="smallblog-hero-section">
            <h4 className="article-title">Link Here</h4>

            <img
              id="hero-img"
              src="https://images.unsplash.com/photo-1623863774468-7741435322e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80"
              alt="image-for-news-article"
            />
          </section>
        </aside>
      </div>
    </>
  );
}
