
// export const state = () => ({
//   items: [],
// })
//
// export const getters = {
//   getItems: state => state.items,
// }
//
// export const mutations = {
//   setItems: (state, data) => (state.items = data),
// }
//
// export const actions = {
//   fetchItems({ commit }) {
//     return this.$axios
//       .get(`https://fakestoreapi.com/products`)
//       .then(response => {
//         const deals = response.data.data.items
//         commit('setItems', deals || [])
//       })
//       .catch(logError)
//   },
// }
