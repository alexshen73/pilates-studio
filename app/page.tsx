"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.location.replace("./uk/");
  }, []);

  return (
    <main className="container" style={{ paddingTop: "6rem", paddingBottom: "2rem" }}>
      <section className="block">
        <p>
          Redirecting to Ukrainian page...
          <a href="./uk/" style={{ marginLeft: "0.6rem", color: "#2f6a66" }}>
            Open now
          </a>
        </p>
      </section>
    </main>
  );
}
