'use client'

import { FC, useState } from 'react'
import styles from '@/styles/block/headers.module.scss'
import Image from 'next/image'
import logo from '@/images/icon/logo.svg'
import Link from 'next/link'
import user from '@/images/icon/user.svg'
import basket from '@/images/icon/basket.svg'
import hearth from '@/images/icon/hearth.svg'
import { usePathname, useRouter } from 'next/navigation'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const Headers: FC = () => {
	const [search, setSearch] = useState<string>('')
	const countFavorite = useTypedSelector(
		state => state.favorite.products.length
	)
	const countBasket = useTypedSelector(state => state.basket.products.length)
	const router = usePathname()
	const [menu, setMenu] = useState<boolean>(false)

	return (
		<>
			<header className={styles.header}>
				<Link href='/' className={styles.link}>
					<Image src={logo} alt='logo' className={styles.logo} />
				</Link>
				<input
					type='text'
					placeholder='Search'
					onChange={e => setSearch(e.target.value)}
					className={styles.search}
				/>
				<div className={styles.nav__list}>
					<Link
						href='/'
						className={router === '/' ? styles.nav__active : styles.nav}
					>
						Home
					</Link>
					<Link
						href='/about'
						className={router === '/about' ? styles.nav__active : styles.nav}
					>
						About
					</Link>
					<Link
						href='/contact'
						className={router === '/contact' ? styles.nav__active : styles.nav}
					>
						Contact us
					</Link>
					<Link
						href='/blog'
						className={router === '/blog' ? styles.nav__active : styles.nav}
					>
						Blog
					</Link>
				</div>
				<div className={styles.data__container}>
					<Link href='/favorite'>
						<div className={styles.user__data}>
							<Image src={hearth} alt='hearth' className={styles.user__data} />
							{countFavorite ? (
								<div className={styles.count}>{countFavorite}</div>
							) : (
								''
							)}
						</div>
					</Link>
					<div className={styles.user__data}>
						<Image src={basket} alt='basket' className={styles.user__data} />
						{countBasket ? (
							<div className={styles.count}>{countBasket}</div>
						) : (
							''
						)}
					</div>
					<div className={styles.user__data}>
						<Image src={user} alt='user' className={styles.user__data} />
					</div>
				</div>
				<div
					className={
						menu
							? [styles.btn__menu, styles.btn__menu__active].join(' ')
							: styles.btn__menu
					}
					onClick={() => setMenu(!menu)}
				>
					<span className={styles.top}></span>
					<span className={styles.center}></span>
					<span className={styles.bottom}></span>
				</div>
			</header>
			<div
				className={
					menu
						? [styles.menu__container, styles.menu__container__active].join(' ')
						: styles.menu__container
				}
			>
				<div
					className={
						menu ? [styles.menu, styles.menu__active].join(' ') : styles.menu
					}
				>
					<ul className={styles.nav__list}>
						<Link
							href='/'
							className={router === '/' ? styles.nav__active : styles.nav}
							onClick={() => setMenu(false)}
						>
							Home
						</Link>
						<Link
							href='/about'
							className={router === '/about' ? styles.nav__active : styles.nav}
							onClick={() => setMenu(false)}
						>
							About
						</Link>
						<Link
							href='/contact'
							className={
								router === '/contact' ? styles.nav__active : styles.nav
							}
							onClick={() => setMenu(false)}
						>
							Contact us
						</Link>
						<Link
							href='/blog'
							className={router === '/blog' ? styles.nav__active : styles.nav}
							onClick={() => setMenu(false)}
						>
							Blog
						</Link>
					</ul>
					<input
						type='text'
						className={styles.search}
						onChange={e => setSearch(e.target.value)}
						placeholder='search'
					/>
                    <button className={styles.search__btn}>Search...</button>
					<div className={styles.data__container}>
						<Link href='/favorite'>
							<div className={styles.user__data} onClick={() => setMenu(false)}>
								<Image src={hearth} alt='hearth' className={styles.user__data} />
								{countFavorite ? (
									<div className={styles.count}>{countFavorite}</div>
								) : (
									''
								)}
							</div>
						</Link>
						<div className={styles.user__data} onClick={() => setMenu(false)}>
							<Image src={basket} alt='basket' className={styles.user__data} />
							{countBasket ? (
								<div className={styles.count}>{countBasket}</div>
							) : (
								''
							)}
						</div>
						<div className={styles.user__data} onClick={() => setMenu(false)}>
							<Image src={user} alt='user' className={styles.user__data} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Headers
