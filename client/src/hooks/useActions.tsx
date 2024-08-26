'use client'

import { basketSlice, favoriteSlice } from '@/store/slice'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const rootAction = {
    ...basketSlice.actions, ...favoriteSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}