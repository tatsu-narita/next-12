/** @type {import ("next-sitemap").IConfig} */
const config = {
    siteUrl: "",
    exclude: ["/server-sitemap.xml"],
    robotsTxtOptions: {
        additionalSitemaps: ["https://*****/server-sitemap.xml"],
    },
}

module.exports = config
