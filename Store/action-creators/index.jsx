export const Deposit = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"deposit",
            payload:amount
        })
    }
}

export const Withdraw = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"withdraw",
            payload:amount
        })
    }
}

export const inputValue = (input) => {
    return (dispatch) => {
        dispatch({
            type:"value",
            payload:input
        })
    }
}