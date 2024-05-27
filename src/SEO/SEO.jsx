import { NextSeo } from 'next-seo';

const SEO = ({ title, description, canonical, ogUrl, ogTitle, ogDescription, ogImage, twitterHandle, twitterSite, twitterCardType }) => (
  <NextSeo
    title={title}
    description={description}
    
    canonical={canonical}
    openGraph={{
      url: ogUrl,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Leapmotors',
          type: 'image/jpeg',
        },
      ],
      siteName: 'Leapmotors',
      link: [
        {
          rel: 'icon',
          href: '/brand.png',
        },
      ],
    }}
    additionalLinkTags={[
      {
        rel: 'icon',
        href: '/brand.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/brand.png',
        sizes: '76x76'
      },
      {
        rel: 'manifest',
        href: '/manifest.json'
      },
      {
        rel: 'preload',
        href: '/brand.png',
      }
    ]}
    twitter={{
      handle: twitterHandle,
      site: twitterSite,
      cardType: twitterCardType,
    }}
    additionalMetaTags={[
      {
        name: 'googlebot',
        content: 'index,follow', 
      },
      {
        name: 'robots',
        content: 'index,follow',
      },
    ]}
    
  />
);

export default SEO;
