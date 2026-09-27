import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { PhotoGallery } from "./components/PhotoGallery";
import { Opportunity } from "./components/Opportunity";
import { LandFacts } from "./components/LandFacts";
import { SitePlan } from "./components/SitePlan";
import { DevelopmentPlan } from "./components/DevelopmentPlan";
import { Returns } from "./components/Returns";
import { Team } from "./components/Team";
import { OfferingTerms } from "./components/OfferingTerms";
import { RiskDisclosure } from "./components/RiskDisclosure";
import { CallToAction } from "./components/CallToAction";
import { SiteFooter } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <PhotoGallery />
      <Opportunity />
      <LandFacts />
      <SitePlan />
      <DevelopmentPlan />
      <Returns />
      <Team />
      <OfferingTerms />
      <RiskDisclosure />
      <CallToAction />
      <SiteFooter />
    </>
  );
}
