import '../public/styles.css';
import '../public/bootstrap-icons.css'
import Script from 'next/script';
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      < Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-231541258-1`
        }
      />
      < Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-231541258-1', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      < Component {...pageProps} />
    </>
  )
}

export default MyApp
