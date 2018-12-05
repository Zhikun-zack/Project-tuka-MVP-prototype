import React from 'react';

class ScrollingChannels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const list = this.props.renderingData
            .filter(song => song.genre === this.props.genre)
            .map(song => {
            return (
                <div key={song.id} style={{"backgroundColor":"silver", "marginBottom":"5px"}}>
                    <b style={{ "display": "block" }}>{song.id}</b>
                    <i style={{ "display": "block" }}>{song.genre}</i>
                    <center>
                        <img src={song.image} alt="" style={{ "height": "10vh", "display": "block" }} />
                    </center>

                </div>
            )
        })
        return (
            <div className="col-md-2">
                <div style={{ "borderBottom": "solid 1px black" }}>
                    <center><i style={{"display":"block"}}>{this.props.genre}</i><img src={this.props.genreIcon} alt="" style={{ "width":"100%" }} /></center>
                </div>
                <div style={{ "overflowY": "auto", "overflowX": "hidden", "height":"60vh" }}>
                    {list}
                </div>
            </div>
        )
    }
}

export default ScrollingChannels;