import "../styles/hero.css";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content container">
        <div className="hero-subContainer">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <div>
            <Button label="Get started" variant="secondary" />
          </div>
        </div>
        <div className="hero-section">
          <img
            className="hero-image"
            src="/assets/illustration-working.svg"
            alt="images"
          />
        </div>
      </div>
    </div>
  );
}
