import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const self = (state: RootState) => state

export const selectAuth = createSelector(self, (state) => state.auth)
