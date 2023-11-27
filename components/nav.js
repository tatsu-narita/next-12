import { useState } from "react"
import Link from "next/link"
import styles from "styles/nav.module.css"

export default function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false)
    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            <btoa className={styles.btn}>MENU</btoa>

            <ul className={styles.list}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}