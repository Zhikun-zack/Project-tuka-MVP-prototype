import React from 'react';
import Artist from "./Artist";
import './MusicRow.css';

import singer1 from './img/singer1.png';
import singer2 from './img/singer2.png';
import singer3 from './img/singer3.png';
import singer4 from './img/singer4.png';
import singer5 from './img/singer5.png';
import singer6 from './img/singer6.png';

class MusicRow extends React.Component{
    state={
        artists : [
            {name:"singer1",
                song:"song title",
                image:singer1},
            {name:"singer2",
                song:"song title",
                image:singer2},
            {name:"singer3",
                song:"song title",
                image:singer3},
            {name:"singer4",
                song:"song title",
                image:singer4},
            {name:"singer5",
                song:"song title",
                image:singer5},
            {name:"singer6",
                song:"song title",
                image:singer6}]
    };
    render() {
        return this.props.genres.map(genre => (
            <div>

            <div className='ui divider my_divider'></div>

            <div className='flex_wraper'>
                <div>
                <i className="angle left icon huge" />
                </div>
                <div style={{width: '90%'}}>
                    <div>
                    <h2 className="row_header">{genre}</h2>
                    </div>
                    <div className="ui grid" style={{width: '90%', margin: '0 auto'}} >
                        <Artist artists={this.state.artists}/>
                    </div>

                </div>
                <div><i className="angle right icon huge" /></div>

            </div>
        </div>
            
        ));
    };
}

export default MusicRow;