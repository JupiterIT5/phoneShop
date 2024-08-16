'use client'

import { NextPage } from 'next'
import styles from '@/styles/home/advertising.module.scss'

const Advertising: NextPage = () => {
  return (
    <div className={styles.advertising__container}>
        <div className={[styles.advertising, styles.playstation].join(' ')}>
            <h2><span>Playstation 5</span></h2>
            <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
        </div>
        <div className={[styles.advertising, styles.airpods].join(' ')}>
            <h2>Apple AirPods <span>Max</span></h2>
            <p>Computational audio. Listen, it's powerful</p>
        </div>
        <div className={[styles.advertising, styles.appleVisionPro].join(' ')}>
            <h2>Apple Vision <span>Pro</span></h2>
            <p>An immersive way to experience entertainment</p>
        </div>
        <div className={[styles.advertising, styles.macbook].join(' ')}>
            <h2>Macbook <span>Air</span></h2>
            <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button>Shop now</button>
        </div>
    </div>
  )
}

export default Advertising