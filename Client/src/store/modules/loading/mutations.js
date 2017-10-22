import { UN_LOADING, DO_LOADING } from '../../mutation.type'

export default {
    [UN_LOADING](state) {
        state.isLoading = false
    },
    [DO_LOADING](state) {
        state.isLoading = true
    },
}