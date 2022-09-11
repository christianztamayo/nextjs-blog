export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          line-height: 1.6;
          font-size: 18px;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        img {
          max-width: 100%;
          display: block;
        }

        .heading2Xl {
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.05rem;
          margin: 1rem 0;
        }

        .headingXl {
          font-size: 2rem;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: -0.05rem;
          margin: 1rem 0;
        }

        .headingLg {
          font-size: 1.5rem;
          line-height: 1.4;
          margin: 1rem 0;
        }

        .headingMd {
          font-size: 1.2rem;
          line-height: 1.5;
        }

        .borderCircle {
          border-radius: 9999px;
        }

        .colorInherit {
          color: inherit;
        }

        .padding1px {
          padding-top: 1px;
        }

        .list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .listItem {
          margin: 0 0 1.25rem;
        }

        .lightText {
          color: #666;
        }
      `}</style>
    </>
  );
}
