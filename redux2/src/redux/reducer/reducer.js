

let initialState = {
    count : 0,

}


function reducer(state=initialState, action) {
    console.log(action)
    
    switch(action.type) {
        case 'INCREMENT' :
            // ...state는 복사본
            return { ...state, count : state.count + 1};
        default :
            return {...state};
    }
    
}

export default reducer;