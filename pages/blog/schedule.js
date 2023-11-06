import { client } from "lib/api"

export default function Schedule() {
    return <h1>記事のタイトル</h1>
}

export async function getStaticProps() {
    const resPromise = client.get({
        endpoint: "blogs",
    })
    console.log(resPromise)

    console.log("処理1")
    setTimeout(() => console.log("処理2"), 1000)
    console.log("処理3")

    return {
        props: {},
    }
}