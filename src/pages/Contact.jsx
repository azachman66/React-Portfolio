import "../styles/Contact.css";
import GitHub from "../assets/github-mark.png";
import Email from "../assets/email-icon-121.png";
import Phone from "../assets/phone-icon-928.png";

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam in debitis alias, placeat voluptates, quos sapiente inventore odio eius velit molestiae, dolorem eaque repellat qui provident vero rem nostrum distinctio.</p>
      <div id="links"><a href="https://github.com/azachman66"><img src={GitHub} alt="GitHub Link" /></a> <a href="#" title="azachman66@gmail.com"><img src={Email} alt="Email" /></a> <a href="#" title="000-000-0000"><img src={Phone} alt="Phone Number" /></a></div>
    </section>
  )
}

export default Contact