import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
            

            {/* FUENTES */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,600;1,600&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600;1,700&amp;display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet" />

{/* BOOSTRARP */}
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />





            {/* <!-- Google Fonts --/> */}
            {/* <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,100&display=optional' rel='stylesheet' type='text/css'/> */}
            {/* <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700&display=optional' rel='stylesheet' type='text/css'/> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}