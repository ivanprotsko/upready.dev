import Feature, { PortfolioData } from '@/components/shadcn-space/blocks/feature-09/feature'

const portfolioData: PortfolioData = [
  {
    image: "https://images.shadcnspace.com/assets/svgs/bitcoin-icon.svg",
    name: "Bitcoin"
  },
  {
    image: "https://images.shadcnspace.com/assets/svgs/ethereum-icon.svg",
    name: "Bitcoin"
  },
  {
    image: "https://images.shadcnspace.com/assets/svgs/litecoin-icon.svg",
    name: "Bitcoin"
  },
  {
    image: "https://images.shadcnspace.com/assets/svgs/polkadot-icon.svg",
    name: "Bitcoin"
  }
]


const Feature09 = () => {
  return (
    <Feature portfolioData={portfolioData}/>
  )
}

export default Feature09
