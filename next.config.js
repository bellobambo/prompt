/** @type {import('next').NextConfig} */
const nextConfig = {
    resolve: {
        fallback: {
            util: require.resolve("util/")
        }
    }

}

module.exports = nextConfig
