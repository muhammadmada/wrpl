import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.logo}>
                <ul>
                    <li>
                        <Link href="/">
                            <img className='navStyles.logo' src='https://ipfs.io/ipfs/QmbCXqkwUgjWKvsEeHihY3ahFBwJc39Nijv4o3baCcunUd?filename=pharmaease.png' 
                            width={150}></img>
                        </Link>
                    </li>
                </ul>
            </div>
            <div class={navStyles.middle}>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
            </ul>
            </div>
            <div className={navStyles.login}>
                <ul>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;