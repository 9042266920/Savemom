import "../../styles/footer.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import bg from "../../assets/bg.png";

const Footer = () => {
  return (
    <footer className="footer">
        {/* BACKGROUND GLOWS */}
  <img src={bg} alt="" className="footer-bg bg-one" />
  <img src={bg} alt="" className="footer-bg bg-two" />
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="footer-logo">sneat</h2>

          <p className="footer-desc">
            Most developer friendly & highly customisable Admin Dashboard Template.
          </p>

          <div className="subscribe-inline">
            <span className="subscribe-text">Subscribe to newsletter</span>
            <div className="footer-subscribe">
  <input type="email" placeholder="Your email" />
  <button>Subscribe</button>
</div>

          </div>
        </div>

        {/* PAGES */}
        <div className="footer-links">
          <h4>Pages</h4>
          <ul>
            <li>Pricing</li>
            <li>Payment <span className="badge">New</span></li>
            <li>Maintenance</li>
            <li>Coming Soon</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="footer-links">
          <h4>Products</h4>
          <ul>
            <li>Page Builder</li>
            <li>Admin Dashboards</li>
            <li>UI Kits</li>
            <li>Illustrations</li>
          </ul>
        </div>

        {/* APP DOWNLOAD */}
        <div className="footer-apps">
          <h4>Download our app</h4>

          <button className="store-btn">
            <FaApple />
            <div>
              <span>Download on the</span>
              <strong>App Store</strong>
            </div>
          </button>

          <button className="store-btn">
            <FaGooglePlay />
            <div>
              <span>Download on the</span>
              <strong>Google Play</strong>
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
