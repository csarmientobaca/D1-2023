import React from 'react';

class ImageComponent extends React.Component {
    render() {
        return <img className={this.props.className} src={this.props.src} ></img>
    }


}

export default ImageComponent