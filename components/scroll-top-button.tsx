"use client";

export function ScrollTopButton() {
  return (
    <button
      type="button"
      className="upButton"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
