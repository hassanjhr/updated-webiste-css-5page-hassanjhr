import Digi from "@/app/assets/digi.png";
import "@/app/styles/contact.css";

const Contact = () => {
  return (
    <div>
      <section
        className="Contact"
        style={{
          backgroundImage: `url(${Digi.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-number">Contact Number</label>
              <input
                type="tel"
                id="contact-number"
                name="contact-number"
                placeholder="Your Contact Number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="query">Your Query</label>
              <textarea
                id="query"
                name="query"
                placeholder="Your Query"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
