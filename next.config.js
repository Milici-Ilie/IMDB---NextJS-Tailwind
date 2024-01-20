/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
}; //💳💳[CARD COMPONENT]💳💳 to make the IMG to fetch from the API we need to write those codes from above ... NOTE!!! that the '"image.tmdb.org'  will be different for every other site's depending on the links that you have

module.exports = nextConfig;
