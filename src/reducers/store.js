import {createStore} from 'redux'

function OneList(state=[],action){
    switch(action.type){
        case 'onList_add':
            return [1,2,3]
        default:
            return state
    }
}
let store=createStore(OneList)
export default store