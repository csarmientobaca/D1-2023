import React from 'react';

class ImageComponent extends React.Component {
    render() {
        return <img src={this.props.src} ></img>
    }


}

export default ImageComponent