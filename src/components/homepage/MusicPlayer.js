import React from 'react';
import { connect } from 'react-redux';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

const audioList1 = [
    {
      name: 'Despacito',
      singer: 'Luis Fonsi',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await fetch('/api')
      // },
      duration:(10.00)
    },
    {
      name: 'Dorost Nemisham',
      singer: 'Sirvan Khosravi',
      cover:
        'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
      musicSrc:
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
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
                    console.log(instance.play())
                    this.props.getMusicInstance(instance)
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