import Portfolio from "@/components/shadcn-space/blocks/portfolio-05/portfolio";

const portfolioData = [
  {
    title: "Tranquil Haven Cottage",
    address: "7 Ocean Breeze Drive, Malibu",
    price: "$620,000",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-1.webp",
    beds: "4",
    baths: "3",
    area: "115m²",
  },
  {
    title: "Sunset Ridge Estate",
    address: "23 Palm Coast Lane, Key Largo",
    price: "$780,000",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-2.webp",
    beds: "5",
    baths: "2",
    area: "130m²",
  },
   {
    title: "Whispering Pines Manor",
    address: "12 Coral Way, Boca Raton",
    price: "$590,000",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-3.webp",
    beds: "4",
    baths: "3",
    area: "125m²",
  },
  {
    title: "Coastal Breeze Residence",
    address: "33 Sunset Blvd, Venice",
    price: "$610,000",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-4.webp",
    beds: "4",
    baths: "3",
    area: "140m²",
  },
  {
    title: "Emerald Bay Villa",
    address: "9 Harbor View, Naples",
    price: "$825,000",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-5.webp",
    beds: "4",
    baths: "3",
    area: "140m²",
  },
  {
    title: "Golden Hour Abode",
    address: "44 Bay Shore Circle, Tampa",
    price: "$710,000",
    image: "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-6.webp",
    beds: "4",
    baths: "3",
    area: "140m²",
  },
];


const Portfolio05Page = () => {
  return <Portfolio data={portfolioData} />;
};

export default Portfolio05Page;
