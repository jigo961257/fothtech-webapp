/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.wikia.nocookie.net',
            port: '',
            pathname: '/bokunoheroacademia/images/**',
          },
          {
            protocol: 'https',
            hostname: 'lottie.host',
            port: '',
            pathname: '/embed/**',
          },
          {
            protocol: 'https',
            hostname: 'app.lottiefiles.com',
            port: '',
            pathname: '/animation/**',
          },
        ],
      },
};

export default nextConfig;
