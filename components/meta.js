import Head from 'next/head'
import { SITE_TITLE, HOME_OG_IMAGE_URL } from '../lib/constants'
import { GA_TRACKING_ID } from '../lib/gtag'

export default function Meta({ ogImage, ogTitle }) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Let's call it Football "Analysis".`} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content={ogTitle} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@OTB_Official" />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <script
        data-ad-client="ca-pub-9724511505686860"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    </Head>
  );
}
