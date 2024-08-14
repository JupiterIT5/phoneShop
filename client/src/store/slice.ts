import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPhoneSlice } from './types.interface'
import { IPhone } from '@/interface/global.interface'

const initialStateBasket: IPhoneSlice = {
    products: []
}

const initialStateFavorite: IPhoneSlice = {
    products: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState: initialStateBasket,
    reducers: {
        addToBasket: (state, action: PayloadAction<IPhone>) => {
            state.products = [...state.products, action.payload]
        }, 
        deleteToBasket: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(value => value.id !== action.payload)
        }
    }
})

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: initialStateBasket,
    reducers: {
        addToFavorite: (state, action: PayloadAction<IPhone>) => {
            state.products = [...state.products, action.payload]
        },
        removeToFavorite: (state, action: PayloadAction<number>) => {
            state.products.filter(value => value.id !== action.payload)
        }
    }
})