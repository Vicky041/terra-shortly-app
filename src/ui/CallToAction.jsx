import Button from "../components/Button";
import CallToActionLinks from "../components/CallToACtionLinks";
import useFetch from "../hooks/useFetch";
import { useShorten } from "../hooks/useShorten";

const API_URL = "http://localhost:5000/api/shorten";


const CallToAction = () => {
  const { post } = useFetch();
  const { state, setError, setLoading, setShortenedLink, setLink } = useShorten();
  
  const handleShorten = async (url) => {
    if (!url.trim()) {
      setError("Please enter a link to shorten.");
      return;
    }

    setLoading();

    const { data, error: postError } = await post(
      API_URL,
      new URLSearchParams({ url: state.link }),
      {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    );

    if (postError || data?.error) {
      setError(postError?.message || data?.error || "Failed to shorten the link. Try again.");
    } else {
      setShortenedLink(data.result_url);
    }
  };

  return (
    <section className="container">
      <div className="cta">
        <div className="cta-input-container">
          <div className="cta-input-wrapper">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="cta-input"
              value={state.link}
              onChange={(e) => setLink(e.target.value)}
            />
            <Button
              label="Shorten it!"
              variant="primary"
              onClick={() => handleShorten(state.link)}
            />
          </div>
          {state.error && <p className="cta-error">{state.error}</p>}
        </div>
        <CallToActionLinks links={state.history} />
      </div>
    </section>
  );
};

export default CallToAction;
