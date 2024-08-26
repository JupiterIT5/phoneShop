import { NextPage } from 'next'
import styles from '@/styles/block/footer.module.scss'
import Image from 'next/image'
import logo from '@/images/icon/logoFooter.svg'
import Link from 'next/link'
import twitter from '@/images/icon/web/twitter.svg'
import ok from '@/images/icon/web/ok.svg'
import tiktok from '@/images/icon/web/tiktok.svg'
import facebook from '@/images/icon/web/facebook.svg'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
        <section className={styles.footer__first}>
            <div className={styles.cyber}>
                <h2 className={styles.title}><Image src={logo} alt="logo" /></h2>
                <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
            </div>
            <div className={styles.services}>
                <h2 className={styles.title}>Services</h2>
                <ul className={styles.nav__list}>
                    <li><Link className={styles.nav} href="#">Bonus program</Link></li>
                    <li><Link className={styles.nav} href="#">Gift cards</Link></li>
                    <li><Link className={styles.nav} href="#">Credit and payment</Link></li>
                    <li><Link className={styles.nav} href="#">Service contracts</Link></li>
                    <li><Link className={styles.nav} href="#">Non-cash account</Link></li>
                    <li><Link className={styles.nav} href="#">Payment</Link></li>
                </ul>
            </div>
            <div className={styles.assistanceToTheBuyer}>
                <h2 className={styles.title}>Assistance to the buyer</h2> 
                <ul className={styles.nav__list}>
                    <li><Link className={styles.nav} href="#">Find an order</Link></li>
                    <li><Link className={styles.nav} href="#">Terms of delivery</Link></li>
                    <li><Link className={styles.nav} href="#">Exchange and return of goods</Link></li>
                    <li><Link className={styles.nav} href="#">Guarantee</Link></li>
                    <li><Link className={styles.nav} href="#">Frequently asked questions</Link></li>
                    <li><Link className={styles.nav} href="#">Terms of use of the site</Link></li>
                </ul>
            </div>
        </section>
        <section className={styles.footer__second}>
            <ul className={styles.icon__list}>
                <li><Link href="#"><Image src={twitter} alt="twitter" /></Link></li>
                <li><Link href="#"><Image src={facebook} alt="facebook" /></Link></li>
                <li><Link href="#"><Image src={tiktok} alt="tiktok" /></Link></li>
                <li><Link href="#"><Image src={ok} alt="ok" /></Link></li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer