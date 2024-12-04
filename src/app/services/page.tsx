import Digi from "@/app/assets/digi.png";
import "@/app/styles/services.css";

const Service = () => {
  return (
    <div>
      <section
        className="Services"
        style={{
          backgroundImage: `url(${Digi.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="service-container">
          <h2>Our Services</h2>
          <div className="services-cards">
            <div className="service-card">
              <h3>Social Media Marketing</h3>
              <p>
                Boost your brand visibility with targeted social media campaigns
                across various platforms. Our expert team creates engaging
                content and strategies to connect with your audience.
              </p>
              <button className="explore-btn">Explore More</button>
            </div>

            <div className="service-card">
              <h3>SEO (Search Engine Optimization)</h3>
              <p>
                Enhance your website is ranking on search engines. We use
                advanced SEO techniques to ensure your site gets the visibility
                it deserves, bringing in organic traffic.
              </p>
              <button className="explore-btn">Explore More</button>
            </div>

            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Get a responsive, user-friendly website tailored to your
                business needs. We specialize in creating beautiful, functional
                websites that drive results and enhance user experience.
              </p>
              <button className="explore-btn">Explore More</button>
            </div>

            <div className="service-card">
              <h3>Content Marketing</h3>
              <p>
                Drive engagement and build brand loyalty with our custom content
                marketing strategies. We create valuable, relevant content to
                attract and retain your target audience.
              </p>
              <button className="explore-btn">Explore More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
