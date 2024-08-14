import { NextPage } from 'next'
import styles from '@/styles/home/about.module.scss'

const About: NextPage = () => {
	return (
		<div className={styles.about}>
			<div className={styles.text}>
				<h2>Pro.Beyond.</h2>
				<h1>
					IPhone 14 <span>Pro</span>
				</h1>
				<p>Created to change everything for the better. For everyone</p>
				<button>Shop Now</button>
			</div>
		</div>
	)
}

export default About
