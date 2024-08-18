import '@/styles/global.scss'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import ProviderLayout from './provider'
import { Inter } from 'next/font/google'
import Headers from '@/components/Headers'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Apple Store',
	description: 'Sale new device: phone, notebook, macbook, IMac! discount 10%. New collections in the USA!',
	icons: 'https://cdn-icons-png.flaticon.com/512/0/747.png'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<ProviderLayout>
			<html lang='en' className={inter.className}>
				<body>
					<Headers />
					{children}
				</body>
			</html>
		</ProviderLayout>
	)
}

export default RootLayout
