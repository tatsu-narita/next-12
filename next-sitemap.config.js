/** @type {import ("next-sitemap").IConfig} */
const config = {
    siteUrl: "",
    outDir: "./out",
    exclude: ["/server-sitemap.xml"],
    robotsTxtOptions: {
        additionalSitemaps: ["https://*****/server-sitemap.xml"],
    },
}

module.exports = config

