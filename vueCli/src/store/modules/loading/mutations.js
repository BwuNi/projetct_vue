import type from './mutation.type'

const { UN_LOADING, DO_LOADING } = type

export default {
    [UN_LOADING](state) {
        state.isLoading = false
    },
    [DO_LOADING](state) {
        state.isLoading = true
    },
}