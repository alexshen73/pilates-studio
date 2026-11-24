import type { NextConfig } from "next";

// `next build` завжди робить статичний експорт у папку out/.
// `next dev` працює як звичайно, включно з формою /api/lead.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isBuild = process.env.NODE_ENV === "production";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repoBasePath =
  isGithubPages && process.env.GITHUB_ACTIONS === "true" && repositoryName
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isBuild ? "export" : undefined,
  trailingSlash: isGithubPages,
  images: { unoptimized: true },
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
};

export default nextConfig;
