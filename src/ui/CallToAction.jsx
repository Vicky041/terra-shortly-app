import Button from "../components/Button";
import CallToActionLinks from "../components/CallToActionLinks";
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
      setLink("")
    }
  };

  return (
    <section className="cta-container">
      <div className="container">
        <div className="cta">
          <div className="cta-input-container">
            <div className="cta-input-wrapper">
              <div>
                <input
                  type="text"
                  placeholder="Shorten a link here..."
                  className={`cta-input ${state.error ? "error" : ""}`}
                  value={state.link}
                  onChange={(e) => {
                    setLink(e.target.value);
                    if (state.error) setError(null);
                  }}
                  aria-invalid={!!state.error}
                  aria-describedby={state.error ? "cta-error-msg" : undefined}
                />
                {state.error && (
                  <p className="cta-error" id="cta-error-msg">
                    {state.error}
                  </p>
                )}
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
      </div>
    </section>
  );
};

export default CallToAction;
