import React from 'react';
import des1 from './img/icon-1.png';
import des2 from './img/icon-2.png';
import des3 from './img/icon-3.png';
import des4 from './img/icon-4.png';
import underline from './img/underline.png';
import DescriptionItem from "./DescriptionItem";
import './Description.css'

class Description extends React.Component{
    state = {
        descrips:[
            {img:des1,
                sentence:"Artists can sell their songs to curators and fans so they can share it with their network."},
            {img:des2,
                sentence:"Fans can create profiles to search and filter content snippets by genre keywords"},
            {img:des3,
                sentence: "Curators can share purchased content with their networks via snippets and receive token rewards."},
            {img:des4,
                sentence:"Copyright is secured through blockchain records of all data transactions. Users own and control their data for additional compensation."}]

    };
    render() {
        return (
            <div className="description" id="hideMe">
                <h1 className="main_content">
                    What is Tuka?
                </h1>
                <div><img width="200px" src={underline} /></div>
                <div><p style={{color:"grey", fontSize:"17px",marginBottom:"25px"}}> <i>Tuka</i> is a content sharing platform and peer-to-peer marketplace<br />
                    for sharing, curating, and marketing original music content<br /></p></div>

                <div className="ui grid tuka_pict">
                    <DescriptionItem descrips={this.state.descrips}/>
                </div>
            </div>
        );
    }
}

export default Description;
