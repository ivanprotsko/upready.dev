"use client";

import { useSlideNavigation } from "@/hooks/use-slide-navigation";
import { SlideNav } from "./SlideNav";
import { CoverSlide } from "./slides/CoverSlide";
import { ProblemSlide } from "./slides/ProblemSlide";
import { SolutionSlide } from "./slides/SolutionSlide";
import { MarketSlide } from "./slides/MarketSlide";
import { ProductSlide } from "./slides/ProductSlide";
import { BusinessModelSlide } from "./slides/BusinessModelSlide";
import { CompetitiveSlide } from "./slides/CompetitiveSlide";
import { TractionSlide } from "./slides/TractionSlide";
import { GoToMarketSlide } from "./slides/GoToMarketSlide";
import { TeamSlide } from "./slides/TeamSlide";
import { FinancialsSlide } from "./slides/FinancialsSlide";
import { AskSlide } from "./slides/AskSlide";

const TOTAL_SLIDES = 12;

export function PitchDeck() {
  const { currentSlide, goToSlide } = useSlideNavigation(TOTAL_SLIDES);

  return (
    <>
      <SlideNav
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        goToSlide={goToSlide}
      />
      <CoverSlide />
      <ProblemSlide />
      <SolutionSlide />
      <MarketSlide />
      <ProductSlide />
      <BusinessModelSlide />
      <CompetitiveSlide />
      <TractionSlide />
      <GoToMarketSlide />
      <TeamSlide />
      <FinancialsSlide />
      <AskSlide />
    </>
  );
}
