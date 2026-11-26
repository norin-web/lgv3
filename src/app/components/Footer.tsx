import { Link } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <img src={img("/images/app-icon.png")} alt="" width={32} height={32} />
              <span>{site.brand}</span>
            </Link>
            <p>{site.disclaimer}</p>
            <a className="footer__mail link" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer__cols">
            <div>
              <h4>Product</h4>
              <ul>
                <li><Link to="/app">The app</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
              </ul>
            </div>
            <div>
              <h4>Help</h4>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copy">
          <span>© {site.year} {site.operator}</span>
          <button onClick={() => scrollTo({ top: 0 })}>Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
