import Banner from "@/components/banner/page";
import { HomeAboutSection } from "../../components/aboutUs/page";
import OfferSection from "./offer/page";
import BlogPreview from "./homeBlogs/page";
import FeaturedMakeup from "@/components/featuredProducts/page";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <HomeAboutSection></HomeAboutSection>
      <FeaturedMakeup></FeaturedMakeup>
      <OfferSection></OfferSection>
      <BlogPreview></BlogPreview>
    </div>
  )
}
