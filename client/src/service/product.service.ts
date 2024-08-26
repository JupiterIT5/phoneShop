import { gql, GraphQLClient } from 'graphql-request'
import { useQuery } from 'react-query'

const API_URL = 'http://localhost:3000/graphql'
const graphQLClient = new GraphQLClient(API_URL)

export interface IArrayProduct {
	getProduct: Array<IProductAll>
	getProductDiscount: Array<IProductAll>
}

export interface IProductAll {
	id: number
	name: string
	price: number
	img: string
}

export const getProductAll = () => {
	return useQuery<IArrayProduct, IArrayProduct, IArrayProduct>(
		'get-product',
		async (): Promise<IArrayProduct> => {
			return await graphQLClient.request(gql`
				query {
					getProduct {
						id
						name
						price
						img
					}
				}
			`)
		}
	)
}

export const getProductAllDiscount = () => {
  return useQuery<IArrayProduct, IArrayProduct, IArrayProduct>(
		'get-product-discount',
		async (): Promise<IArrayProduct> => {
			return await graphQLClient.request(gql`
				query {
					getProductDiscount {
						id
						name
						price
						img
					}
				}
			`)
		}
	)
}