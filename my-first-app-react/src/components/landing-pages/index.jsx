import React from "react";

import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/herosection";
import { ChooseUs } from "./components/chooseUs";
import { FeaturedBooksSection } from "./components/featuredbooksection";
import { CategoriesSection } from "./components/categoriessection";
import { TestimonSection } from "./components/testimonsection";
import { Footers } from "./components/footer";

export default function LandingPage() {
    return(
        <div>
            <Navbar />
            <HeroSection />
            <ChooseUs />
            <FeaturedBooksSection />
            <CategoriesSection />
            <TestimonSection />
            <Footers />
        </div>
    )
}