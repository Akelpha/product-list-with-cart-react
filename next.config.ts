/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
       
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],

        domains: [], // Si tu as des images hébergées ailleurs
    },
};
