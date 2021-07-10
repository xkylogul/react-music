import React, { memo ,useState,useRef,useEffect,useCallback} from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import { NavLink } from 'react-router-dom';
import {Slider,message} from 'antd'
import { getSongDetailAction,
  changeCurrentIndexAction,
  changeSequenceAction,
  changeCurrentLyricIndexAction} from '../store/actionCreator'
import {getSizeImage,formatDate,getPlaySong} from '@/utils/format-util.js'


import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
  } from './style';



 

export default memo(function XKYplayerBar() {
    const {
      currentSong,
      sequence,
      lyricList,
      currentLyricIndex} = useSelector(state=>({
        currentSong:state.getIn(["player","currentSong"]),
        sequence:state.getIn(["player","sequence"]),
        lyricList:state.getIn(["player","lyricList"]),
        currentLyricIndex:state.getIn(["player","currentLyricIndex"])
    }),shallowEqual)
    const audioRef = useRef()
    const [currentTime,setCurrentTime] = useState(0)
    const [progress,setProgress] = useState(0)
    const [isChange,setIsChange] = useState(false)
    const [isPlay,setIsPlay] =useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        
       // dispatch( getSongDetailAction(167876))
    },[dispatch])
    //console.log(audioRef)
   useEffect(()=>{
    audioRef.current.src= getPlaySong((currentSong.id))
    audioRef.current.play().then(res=>{
        setIsPlay(true)
    }).catch(err=>{
        setIsPlay(false)
    })
   },[currentSong])
    const picUrl = (currentSong.al&&currentSong.al.picUrl)||""
    const singerName = (currentSong.ar&& currentSong.ar[0].name )||"未知歌手"
    const duration = currentSong.dt || 0 //总时长
    const showDuration = formatDate(duration, "mm:ss");
    const showCurrentTime = formatDate(currentTime, "mm:ss");
   // const progress =currentTime / duration*100

   
    const playMusic = useCallback(()=>{
           // audioRef.current.play()
           isPlay ? audioRef.current.pause() : audioRef.current.play()
           setIsPlay(!isPlay)
    },[isPlay])
   const timeUpdate=(e)=>{
//console.log(e.target.currentTime)
const currentTime = e.target.currentTime
setCurrentTime(currentTime*1000)
if(!isChange){  
    setProgress(currentTime *1000 / duration*100)
}
//获取当前歌词
   let i =0;
   for(; i<lyricList.length;i++){
     let lyricItem = lyricList[i]
     if(currentTime*1000<lyricItem.time){
       break
     }
   }
   if(currentLyricIndex !==i-1){
     dispatch(changeCurrentLyricIndexAction(i-1))
     const content = lyricList[i-1] && lyricList[i-1].content
     message.open({
       key:"lyric",
       content:content,
       duration:0,
       className:"lyric-class"
     })
   }
    }

  const handleMusicEnded=()=>{
    if(sequence===2){//单曲循环
     audioRef.current.currentTime =0;
     audioRef.current.play()
    } else{
      dispatch(changeCurrentIndexAction(1))
    }
 
  }
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  }
    const sliderChange =useCallback((value)=>{
      console.log("start:"+value)
      setIsChange(true)
      const currentTime = value / 100 * duration
     setCurrentTime(currentTime)
      setProgress(value)
    },[duration])
    const sliderAfterChange =useCallback((value)=>{
        console.log("end:"+value)
        const currentTime = value / 100 *duration / 1000
       audioRef.current.currentTime = currentTime
        setCurrentTime(currentTime)
        setIsChange(false)
        if(!isPlay){
            playMusic()
        }
    
    },[duration,isPlay,playMusic])
    return (
        <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlay={isPlay} >
          <button className="sprite_player prev"
                  ></button>
          <button className="sprite_player play" 
                 onClick={e=>playMusic(e)}></button>
          <button className="sprite_player next"
                  ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl,35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider
              defaultValue={20}
                    value={progress} 
                    onChange={sliderChange}
                    onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence} >
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence()} ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}
      onEnded={e=>handleMusicEnded()}
      />
    </PlaybarWrapper>
    )
})
