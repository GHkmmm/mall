const mutations= {
    addCounter(state, payload){
        payload.count++;
    },
    addCart(state, payload){
        payload.checked= false;
        state.cartList.push(payload)
    }
}

export default mutations;