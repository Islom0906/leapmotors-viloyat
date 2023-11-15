import Head from "next/head";

const SEO = ({children , title , og_title,  keywords , description}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta
          property="og:title"
          content={og_title}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta property="og:title" content="Leapmotorca" />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:site_name" content="Leapmotorca" />
        <meta
          property="og:image"
          content="https://leapmotorca.uz/api/media/5c50e291-35be-46e2-8d99-f5780c1377b9-Leapmotor-logo.png"
        />
        <link rel="icon" href="/brand.png" />
      </Head>
      <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Leapmotorca</title>
                <meta property='og:title' content="Leapmotorca , Leapmotorca Home, leapmotorca home"/>
                <meta name="keywords" content=" Leapmotorca , Leapmotors , Leapmotorauto , Leapmotorca uz, Leapmotors uz, Leapmotorauto uz"/>
                <meta
                    property="og:title"
                    content="Leapmotorca"
                />
                <meta
                    property="og:description"
                    content="Мы являемся ведущей компанией по производству интеллектуальных электромобилей, которая стремится предоставить всем потребителям наилучшие возможности инновационной мобильности"
                />
                <meta property="og:site_name" content="Leapmotorca"/>
                <meta property="og:image" content="https://leapmotorca.uz/api/media/5c50e291-35be-46e2-8d99-f5780c1377b9-Leapmotor-logo.png"/>
                <link rel="icon" href="/brand.png"/>
            </Head>
      {children}
    </>
  );
};

export default SEO;
