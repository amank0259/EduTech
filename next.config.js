/** @type {import('next').NextConfig} */
const config = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    reactStrictMode: false,
    images: {
        domains: ['media.graphassets.com']
    }
}

module.exports = config