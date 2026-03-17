import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repoBasePath =
  isGithubPages && process.env.GITHUB_ACTIONS === "true" && repositoryName
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGithubPages ? "export" : undefined,
  trailingSlash: isGithubPages,
  images: isGithubPages ? { unoptimized: true } : undefined,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
};

export default nextConfig;

