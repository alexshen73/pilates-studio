export default function HomePage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=./uk/" />
      <script dangerouslySetInnerHTML={{ __html: "window.location.replace('./uk/');" }} />
      <noscript>
        <meta httpEquiv="refresh" content="0;url=./uk/" />
        <a href="./uk/">Open Ukrainian page</a>
      </noscript>
    </>
  );
}
