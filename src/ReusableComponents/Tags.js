import React from 'react';

const tagStyle = {
  display: "inline-block",
  backgroundColor: "#fff",
  fontSize: "0.9em",
  border: "1px solid #ccc",
  padding: "2px",
  borderRadius: "3px",
  cursor: "pointer"
}

export default class Tag extends React.Component {
  render() {
    return (
        <span style={tagStyle} onClick={() => this.props.onClick(this.props.id)}>&#x2716;&nbsp;{this.props.tag}</span>
    )
  }
}