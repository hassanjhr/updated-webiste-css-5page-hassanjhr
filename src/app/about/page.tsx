import Digi from "@/app/assets/digi.png";
import "@/app/styles/about.css";
import Link from "next/link";


const About = () => {
  return (
    <div className="home-container">
      <section
        className="About1"
        style={{
          backgroundImage: `url(${Digi.src})`, 
        }}
      >
        <div className="About1-content">
          <h1 className="fade-in">About Us!</h1>
          <p>
            At our core, we are a team of dedicated professionals passionate
            about helping businesses succeed in the digital landscape. With
            expertise in web development, SEO, and digital marketing, we strive
            to deliver innovative solutions tailored to meet the unique needs of
            our clients.
            Feel free to contact us.
          </p>
          <button className="contact-btn"><Link href="/contact">Contact</Link></button>
        </div>
      </section>
    </div>
  );
};

export default About;
