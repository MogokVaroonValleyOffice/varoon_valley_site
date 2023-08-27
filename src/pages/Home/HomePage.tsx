import About from "../../components/About";
import Contact from "../../components/Contact";
import Landing from "../../components/Landing";
import NavBar from "../../components/NavBar";
import Section from "../../components/Section";
import Services from "../../components/Services";
import Team from "../../components/Team";
import Technologies from "../../components/Technologies";
import Footer from "../../components/Footer";
import { bgWhite, bgGray } from "../../theme/colors";

const HomePage = () => {
  return (
    <>
      <Section id="nav-bar" maxWidth="1200px" background={bgWhite()} as={"nav"}>
        <NavBar />
      </Section>
      <Section
        id="landing"
        maxWidth="1200px"
        background={bgGray()}
        as={"section"}
      >
        <Landing />
      </Section>
      <Section
        id="technologies"
        maxWidth="1200px"
        background={bgGray()}
        as={"section"}
      >
        <Technologies />
      </Section>
      <Section
        id="services"
        maxWidth="1200px"
        background={bgGray()}
        as={"section"}
      >
        <Services />
      </Section>
      <Section
        id="about"
        maxWidth="1200px"
        background={bgGray()}
        as={"section"}
      >
        <About />
      </Section>
      <Section id="team" maxWidth="1200px" background={bgGray()} as={"section"}>
        <Team />
      </Section>
      <Section
        id="contact"
        maxWidth="1200px"
        background={bgGray()}
        as={"section"}
      >
        <Contact />
      </Section>
      <Section
        id="footer"
        maxWidth="1200px"
        background={bgWhite()}
        as={"footer"}
      >
        <Footer />
      </Section>
    </>
  );
};

export default HomePage;
