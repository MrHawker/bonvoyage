/** @type {import('next').NextConfig} */
import path from 'path'
const __dirname = path.resolve();
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    reactStrictMode: false
};
export default nextConfig;
