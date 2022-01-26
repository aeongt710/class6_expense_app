export default (state, action) => {
    switch (action.type) {
        case "DELETE":
            return {
                ...state,
                transactions: state.transactions.filter(m => m.id !== action.payload)
            }
        case "ADD":
            console.log("Inside Add Method: ")
            console.log(action.payload)
            console.log(...state.transactions)
            console.log("--------------")
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
                // transactions: state.transactions.add(action.trans)
            }
        default:
            return state;
    }
    // return state;
}