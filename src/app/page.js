import Image from "next/image";
import Navbar from "./Navbar";
import OrgDetails from "./OrgDetails";
import EventOverview from "./EventOverview";
import SpeakersSection from "./SpeakersSection";
import Agenda from "./Agenda";
import AboutFinastra from "./AboutFinastra";
import RegistrationForm from "./RegistrationForm";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <OrgDetails />
      <EventOverview />
      <SpeakersSection />
      <Agenda />
      <AboutFinastra />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
