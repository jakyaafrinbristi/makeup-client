import Banner from "@/components/banner/page";
import { HomeAboutSection } from "../../components/aboutUs/page";
import OfferSection from "./offer/page";
import BlogPreview from "./homeBlogs/page";
import FeaturedMakeup from "@/components/featuredProducts/page";
import CategorySection from "./category/page";
import Newsletter from "./newsletter/page";
import Testimonial from "./reviews/page";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <HomeAboutSection></HomeAboutSection>
      <FeaturedMakeup></FeaturedMakeup>
      <OfferSection></OfferSection>
      <BlogPreview></BlogPreview>
      <CategorySection></CategorySection>
      <Newsletter></Newsletter>
      <Testimonial></Testimonial>
      
    </div>
  )
}
