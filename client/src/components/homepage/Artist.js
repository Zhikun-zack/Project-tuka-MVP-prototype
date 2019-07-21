import React from 'react';
import './Artist.css';
import Slider from "react-slick";

class Artist extends React.Component{

    render() {

        return this.props.artists.map((artists) => (

            <div key={artists.name} className="two wide column artist_element">
                <div className="row center_item">
                    < img className="my_img" src={artists.image} alt="No pict shown" />
                </div>
                <div className="row center_item artist_info">
                    <div>{artists.song}/{artists.name}</div>
                    {/*<div>{artists.name}</div>*/}
                </div>
            </div>
        ));
    }
}

export default Artist;
