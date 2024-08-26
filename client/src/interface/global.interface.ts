import { StaticImageData } from 'next/image'

export interface IProduct {
    id: number
    name: string
    img: StaticImageData | string
    price: number
    count?: number
}