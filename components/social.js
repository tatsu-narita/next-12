import styles from "styles/social.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from "@fortawesome/free-brands-svg-icons"

export default function Social() {
    return (
        <ul className={styles.list}>
            <li>
                <a href="http://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>
                </a>
            </li>
            <li>
                <a href="http://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="sr-only">Facebook</span>
                </a>
            </li>
            <li>
                <a href="http://github.com">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="sr-only">Github</span>
                </a>
            </li>
        </ul>
    )
}