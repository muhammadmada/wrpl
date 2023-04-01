import footStyles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className={footStyles.footer}>
                <div>
                    <ul>
                        <li>
                            <Link href="/">
                                <h3>PharmaEase</h3>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                    </ul>
                    <h3>
                        &copy; 2023 PharmaEase
                    </h3>
                    <h6>
                        Made with 💖 in Yogyakarta
                    </h6>
                </div>
            </footer>
        </>
    );
}

export default Footer;