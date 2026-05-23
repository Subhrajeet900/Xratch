import XratchFooter from "../components/XratchFooter";
import XratchContact from "../components/XratchContact";
import XratchTestimonials from "../components/XratchTestimonials";
import XratchProcess from "../components/XratchProcess";
import XratchAbout from "../components/XratchAbout";
import XratchServices from "../components/XratchServices";
import XratchMarquee from "../components/XratchMarquee";
import XratchHero from "../components/XratchHero";
import XratchNavbar from "../components/XratchNavbar";

export default function Home() {
  return (
    <main>
      <XratchNavbar />
      <XratchHero />
      <XratchMarquee />
      <XratchServices />
      <XratchAbout />
      <XratchProcess />
      <XratchTestimonials />
      <XratchContact />
      <XratchFooter />
    </main>
  );
}
