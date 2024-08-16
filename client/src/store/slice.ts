import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductSlice } from './types.interface'
import { IProduct } from '@/interface/global.interface'

const initialState: IProductSlice = {
    products: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<IProduct>) => {
            state.products = [...state.products, action.payload]
        }, 
        deleteToBasket: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(value => value.id !== action.payload)
        }
    }
})

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action: PayloadAction<IProduct>) => {
            state.products = [...state.products, action.payload]
        },
        removeToFavorite: (state, action: PayloadAction<number>) => {
            state.products.filter(value => value.id !== action.payload)
        }
    }
})