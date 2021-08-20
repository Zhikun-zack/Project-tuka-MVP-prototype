import React from 'react';
import { connect } from 'react-redux';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import tequila from "./img/Tequila.mp3";
import tequilaImg from "./img/Tequila.jpg";

const audioList1 = [
    {
      name: 'Tequila',
      singer: 'Dan, Shay',
      cover:
        tequilaImg,
      musicSrc:
        tequila,
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await fetch('/api')
      // },
      duration: 15.00
    },
    
    // {
    //   name: 'Dorost Nemisham',
    //   singer: 'Sirvan Khosravi',
    //   cover:
    //     'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    //   musicSrc:
    //     'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    // },
]
const options = {
    audioList1: audioList1
}
class MusicPlayer extends React.Component {
    constructor() {
        super()
        this.instance = null
    }

    render() {
        return(
            <ReactJkMusicPlayer 
                getAudioInstance={(instance) => {
                    console.log(instance)
                    this.props.getMusicInstance(instance)
                    //set start and end time of music
                    instance.addEventListener("canplaythrough", () => {
                      //set start time
                      if(instance.currentTime > 15){
                        instance.currentTime = 10;
                      }
                      
                      //set duration 15s
                      setTimeout(() =>{               
                        instance.pause();
                        //instance.currentTime = 0;
                      }, 15000)
                    })
                    instance.addEventListener("timeupdate", () => {
                      if(instance.currentTime > 15){
                        instance.currentTime = 0;
                        instance.pause();
                      }
                    })
                }}
                audioLists = {audioList1}
                mode = 'full'
            />
        )       
    }
}
function mapStateToProps (state){
    return{musicInstance: state.musicInstance}
  }
  
  function mapDispatchToProps (dispatch){
    return {getMusicInstance: (musicInstance) => dispatch({
        type: "getMusicInstance", 
        musicInstance: musicInstance.play()
    })}
  }

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);