import Button from "./Button";
import "../styles/CallToActionLinks.css";
import { useState } from "react";

const CallToActionLinks = ({ links }) => {
  const [copiedIndex, setCopiedIndex] = useState(false);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <ul className="cta-links">
      {links.map((link, index) => (
        <li className="cta-link" key={index}>
          <p>{link.original}</p>
          <div>
            <a href={link.short} target="_blank" rel="noopener noreferrer">
              {link.short}
            </a>
            <Button
              label={copiedIndex === index ? "Copied" : "Copy"}
              size="small"
              disabled={copiedIndex === index}
              onClick={() => handleCopy(link.short, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CallToActionLinks;