import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s |  The AI Meme Token for the Community on Sui',
  defaultTitle: 'AICAT - The AI Meme Token for the Community on Sui',
  description:
    'AICAT – the meme token built by the community, for the community on Sui Network. Together, we grow, succeed, and build a future where everyone thrives. With unbeatable tokenomics, full KYC, and zero team allocation, CAT stands for unity, opportunity, and shared prosperity.',
  twitter: {
    cardType: 'summary_large_image',
  },
  openGraph: {
    title: 'AICAT - The AI Meme Token for the Community on Sui',
    description:
      'AICAT – the meme token built by the community, for the community on Sui Network. Together, we grow, succeed, and build a future where everyone thrives. With unbeatable tokenomics, full KYC, and zero team allocation, CAT stands for unity, opportunity, and shared prosperity.',
    images: [{ url: 'https://ai-dog-nu.vercel.app/intro.png' }],
  },
}

export const PAGE_SEO = {}
