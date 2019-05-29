import React from 'react'


class Nav_Catgory extends React.Component {
    render() {
        console.log(this.props);
        return this.props.tags.map(tag =>(
            <div>{tag}</div>
        ));
    }
};


export default Nav_Catgory;