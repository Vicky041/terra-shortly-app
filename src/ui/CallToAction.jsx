import Button from "../components/Button";
import CallToActionLinks from "../components/CallToACtionLinks";
import useFetch from "../hooks/useFetch";
import { useShorten } from "../hooks/useShorten";

const API_URL = import.meta.env.VITE_API_URL;

const CallToAction = () => {
  const { post } = useFetch();
  const { state, setError, setLoading, setShortenedLink, setLink } =
    useShorten();

  const handleShorten = async (url) => {
    if (!url.trim()) {
      setError("Please enter a link to shorten.");
      return;
    }

    setLoading();

    const { data, error: postError } = await post(
      API_URL,
      JSON.stringify({ url: state.link }),
      {
        "Content-Type": "application/json",
      }
    );

    if (postError || data?.error) {
      setError(
        postError?.message ||
          data?.error ||
          "Failed to shorten the link. Try again."
      );
    } else {
      setShortenedLink(data.result_url);
    }
  };

  return (
    <section className="container">
      <div className="cta">
        <div className="cta-input-container">
          <div className="cta-input-wrapper">
            <div>
              <input
                type="text"
                placeholder="Shorten a link here..."
                className="cta-input"
                value={state.link}
                onChange={(e) => setLink(e.target.value)}
              />
              {state.error && <p className="cta-error">{state.error}</p>}
            </div>
            <Button
              label="Shorten it!"
              variant="primary"
              onClick={() => handleShorten(state.link)}
            />
          </div>
        </div>
        <CallToActionLinks links={state.history} />
      </div>
    </section>
  );
};

export default CallToAction;
