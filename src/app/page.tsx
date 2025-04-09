import { Contact } from "./components/contact";
import { Economy } from "./components/economy";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Industry } from "./components/industry";
import { Pricing } from "./components/pricing";
import { SectionDown } from "./components/sectionDown";

export default function Home() {
  return (
    <>
      <Header />
      <SectionDown />
      <Industry />
      <Economy />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
