'use client'

import { basketSlice } from '@/store/slice'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const rootAction = {
    ...basketSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}