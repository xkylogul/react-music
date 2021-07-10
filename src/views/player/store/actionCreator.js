import {getSongDetail,getLyric} from '@/services/player'
import { GET_SONG_DETAIL,
    CHANGE_PLAY_LIST,
    CHANGE_CURRENT_INDEX,
    CHANGE_SEQUENCE,
    CHANGE_LYRIC_LIST,
    CHANGE_CURRENT_LYRIC_INDEX
}from './constants'
import { getRandomNumber} from '@/utils/math-util.js'
import { parseLyric } from '@/utils/parse-lyric';

export const changeSongDetailAction = (currentSong)=>(
    {
        type:GET_SONG_DETAIL,
          currentSong
    }
)

export const changePlayListAction = (playList)=>(
    {
        type:CHANGE_PLAY_LIST,
        playList

    }
)
export const changeCurrentIndexAction = (currentSongIndex)=>({
    type:CHANGE_CURRENT_INDEX,
    currentSongIndex
})

export const changeSequenceAction = (sequence)=>({
    type:CHANGE_SEQUENCE,
    sequence
})
export const changeLyricListAction = (lyricList) =>({
    type:CHANGE_LYRIC_LIST,
    lyricList
})
 
export const changeCurrentLyricIndexAction = (currentLyricIndex)=>({
    type: CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
})
export const getLyricAction = (id) => {
    return dispatch => {
      getLyric(id).then(res => {
        const lyric = res.lrc.lyric;
        const lyricList = parseLyric(lyric);
        dispatch(changeLyricListAction(lyricList));
      })
    }
  }

export const getSongDetailAction = (ids)=>{
    return (dispatch,getState)=>{
        //1:根据id查找playList中是否有了该歌曲
        const playList = getState().getIn(["player","playList"])
     
        const songIndex = playList.findIndex(song=>song.id === ids)
        //console.log(playList+'playList')

        //2:判断是否找到了歌曲
        let song = null
        if(songIndex !==-1){
            dispatch(changeCurrentIndexAction(songIndex))
            song = playList[songIndex]
            dispatch(changeSongDetailAction(song))
            dispatch(getLyricAction(song.id));
        } else{
            //没有歌曲
            //请求歌曲数据
            getSongDetail(ids).then(res=>{
                song = res.songs && res.songs[0]
                if(!song) return
                //将最新请求到的歌曲添加到播放列表中
                const newPlayList = [...playList]
                newPlayList.push(song)
               // console.log(res)
        //更新redux的值
                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentIndexAction(newPlayList.length-1))
                dispatch(changeSongDetailAction(song))
                  // 3.请求歌词
        dispatch(getLyricAction(song.id));
            })

        }
       
    }
}

export const getSequenceAction=(tag)=>{
    return (dispatch,getState)=>{
   const playList = getState().getIn(["player","playList"])
   const sequence = getState().getIn(["player","sequence"])
    let currentSongIndex = getState().getIn(["player","currentSongIndex"])

    switch(sequence){
        case 1: //随机播放
      let randomIndex = getRandomNumber(playList.length)
      while(randomIndex===currentSongIndex){
          randomIndex = getRandomNumber(playList.length)
      }
      currentSongIndex=randomIndex
      break;
      default://顺序播放
      currentSongIndex += tag
      if(currentSongIndex>=playList.length) currentSongIndex = 0
      if(currentSongIndex<0) currentSongIndex = playList.length - 1;
    }
    const currentSong = playList[currentSongIndex]
    dispatch(changeSongDetailAction(currentSong))
    dispatch(changeCurrentIndexAction( playList.length - 1))
    
    // 请求歌词
    dispatch(getLyricAction(currentSong.id));
    }
}
