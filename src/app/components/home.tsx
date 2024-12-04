import Digi from "@/app/assets/digi.png";
import "@/app/styles/home.css";
import Link from "next/link";

const HomeContent = () => {
  return (
    <div className="home-container">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${Digi.src})`,
        }}
      >
        <div className="hero-content">
          <h1 className="fade-in">Welcome to Digiverse Solution!</h1>
          <p>
            At Digiverse, we pride ourselves on being your ultimate partner for
            all things digital. Our mission is to empower businesses by offering
            a wide range of tailored digital services designed to enhance your
            online presence and drive success. From innovative website
            development and seamless e-commerce solutions to result-oriented
            digital marketing strategies, we provide the tools you need to
            thrive in today's competitive market. Welcome to a world where your
            digital dreams become reality!
          </p>
          <button className="contact-btn">
            <Link href="/services">Our Services</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
