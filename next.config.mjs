import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'assets.aceternity.com', 
            },
            {
                hostname: 'aceternity.com', 
            },
        ]
    }
};

export default nextConfig;
