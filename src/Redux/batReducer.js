const initialState = {
    bats1 : 20,
    // ball : 50
}

const BatReducer = (state = initialState, action) => {
    switch (action.type){
        case 'BUY_BAT' :
            return {...state, bats1 : state.bats1 - 1}
        default :
            return state;    
    }
}

export default BatReducer