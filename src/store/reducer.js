import {GET_RECOMMEND} from './constants'
const initstate = {
    recommend:[] //推荐音乐数据
}

function reducer(state=initstate,action){
    switch(action.type){
        case GET_RECOMMEND :
            return {
                ...state,recommend:action.recommend
            }
            default:
                return state
    }
}
export default reducer