import { getServerSideSitemap } from "next-sitemap";
import { getAllSlugs, getAllCategories } from "lib/api";
import { siteMeta } from "lib/constants";

export default function Sitemap() {}

export async function getServerSideProps(context) {
    const posts = await getAllSlugs()
    const postFields = posts.map((post) => {
        return {
            loc: `${siteMeta.siteUrl}/${post.slug}`,
        }
    })
}