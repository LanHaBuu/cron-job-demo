module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all domains
      },
    ],
    dangerouslyAllowSVG: true, // Allow rendering SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Add CSP for security
  },
};
