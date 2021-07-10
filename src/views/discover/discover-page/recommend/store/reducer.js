import {GET_RECOMMEND,
    GET_HOT_RECOMMEND,
    GET_NEW_ALBUM,
    GET_TOP_LIST_FLY,
    GET_TOP_LIST_NEW,
    GET_TOP_LIST_ORIGINAL} from './constants'
import {Map} from 'immutable'   //数据持久化作用

const initstate = Map({
    recommend:[], //推荐音乐数据
    HotRecommend:[],//热门数据
    NewAlbum:[], //新碟上架
   // TopList:[],//排行榜数据
    TopListFly:[],//飙升榜
    TopListNew:[],//新歌榜
    TopListOriginal:[]//原创榜
})

function reducer(state=initstate,action){
    switch(action.type){
        case GET_RECOMMEND :
            return  state.set("recommend",action.recommend)
        case GET_HOT_RECOMMEND :
            return state.set("HotRecommend",action.HotRecommend)
        case GET_NEW_ALBUM :
            return state.set("NewAlbum",action.NewAlbum)
        case   GET_TOP_LIST_FLY:
            return state.set("TopListFly",action.TopListFly)
        case   GET_TOP_LIST_NEW :
            return state.set("TopListNew",action.TopListNew)
        case GET_TOP_LIST_ORIGINAL:
            return state.set("TopListOriginal",action.TopListOriginal)
            default:
                return state
    }
}
export default reducer