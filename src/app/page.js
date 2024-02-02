import Banner from "@/components/Banner";
import BestTraveller from "@/components/BestTraveller";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lounge from "@/components/Lounge";
import TravelSupport from "@/components/TravelSupport";
import Travelinfo from "@/components/Travelinfo";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <main>
        <Banner />
        <Booking />
        <TravelSupport />
        <Travelinfo />
        <Lounge />
        <BestTraveller />
      </main>
      <Footer />
    </div>
  );
}
