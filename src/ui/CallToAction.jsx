import Button from "../components/Button"

const CallToAction = () => {
  return (
    <section className="container">
      <div className="call-to-action">
        <input type="text" placeholder="Shorten a link here" className="url-input" />
        <Button label="Shorten it!"  />
      </div>
    </section>
  )
}

export default CallToAction