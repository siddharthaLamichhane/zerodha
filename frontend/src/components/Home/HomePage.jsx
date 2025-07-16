import { Navbar } from "./Navbar.jsx";
import { Hero } from "./Hero.jsx";
import { Award } from "./Award.jsx";
import { Education } from "./Education.jsx";
import { Pricing } from "./Pricing.jsx";
import { Stats } from "./Stats.jsx";
import { Footer } from "./Footer.jsx";
import { OpenAccount } from "./OpenAccount.jsx";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
};
