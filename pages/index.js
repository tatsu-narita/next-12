import { getAllPost } from "lib/api"

import Container from "components/container"
import Hero from "components/hero"
import Meta from "components/meta"

import Posts from "components/posts"
import pagination from "components/pagination"
import { getPlaiceholder } from "plaiceholder"

//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants"

export default function Home({posts}) {
  return (
    <Container>
      <Meta />
    <Hero
    title="CUBE"
    subtitle="アウトプットしていくサイト"
    imageOn
    />
    <Posts posts={posts} />
    <pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDateURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}