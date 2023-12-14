import styles from "styles/nested-layout.module.css"
import Container from "./container"
import Link from "next/link"

export default function BlueFrame({ children }) {
    return (
        <div className={styles.frame}>
            <Container>{children}</Container>

            <Link href="/blog">
                <a className={styles.sideBtn}>React Blog Posts</a>
            </Link>
        </div>
    )
}