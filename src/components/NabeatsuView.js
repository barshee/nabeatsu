import React, { Component } from 'react'

const style = {
  height: 240,
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2em'
}

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',  
  display: 'block'
}

function ImageGenerator(props) {
  if (props.nabeatsu && !props.jack) {
    return (<img alt="nabeatsu" style={ imgStyle } src="http://powerfultrend.c.blog.so-net.ne.jp/_images/blog/_d13/powerfultrend/r1.jpg" />)
  } else if (props.jack) {
    return (<img alt="jack" style={ imgStyle } src="http://www.hustlefan.com/wordpress/wp-content/uploads/043_24.jpg" />)
  }
  return null;
}

class NabeatsuView extends Component {
  render() {
    const counterStyle = {
      fontSize: !this.props.nabeatsu && !this.props.jack ? 40 : 14
    }
    return (
      <div style={ style }>
        <ImageGenerator
          nabeatsu={ this.props.nabeatsu }
          jack={ this.props.jack }
        />
        <div style={ counterStyle }>{ this.props.count }</div>
      </div>
    )
  }
}

export default NabeatsuView
