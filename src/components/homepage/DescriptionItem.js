import React from 'react'
// import './DescriptionItem.css'

class DescriptionItem extends React.Component{
    render() {
        return this.props.descrips.map((descrips) => (
            <div className="four wide column">
                <div>
                    < img height="100px" src={descrips.img} alt="No pict" />
                </div>
                <div>{descrips.sentence}</div>

            </div>
        ));
    }
}

export default DescriptionItem;
