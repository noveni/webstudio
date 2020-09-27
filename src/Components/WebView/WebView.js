import React, { Component } from 'react';
import './WebView.scss';


const ViewWrapper = (props) => {
  const viewWrapperStyles = {
    padding: props.padding,
    backgroundColor: props.color,
  }

  let wrapper;
  if (props.presetValue !== 'none') {

    const styleBox = {
      paddingTop: props.presetValue,
    }

    const ViewWrapperStylesTwo = {
      width: props.height,
      margin: '0 auto',
    }

    wrapper = (
      <div className="ViewWrapper" style={ViewWrapperStylesTwo}>
        <div className="ViewWrapperBox" style={styleBox}>
          <div className="ViewWrapperBoxInside" style={viewWrapperStyles}>
            {props.children}
          </div>
        </div>
      </div>
    )
  } else {
    wrapper = (
      <div className="ViewWrapper" style={viewWrapperStyles}>
        {props.children}
      </div>
    )
  }
  return wrapper;
}

const Iframe = (props) => {
  let iframeStyle;
  if (props.presetValue === '100%') {
    iframeStyle = {
      transform: 'scale(0.62)',
      width: '160%',
      height: '160%',
      marginLeft: '-30%',
      marginTop: '-30%'
    }
  }
  return (
    <iframe
      style={iframeStyle}
      title="Website Preview"
      width="100%"
      height="100%"
      src={props.url}
    >
    </iframe>
  );
}

class WebView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;
    this.setState({ height });
  }

  render() {
    return (
      <div
        className="ViewWrapperOuter"
        ref={ (divElement) => { this.divElement = divElement } }
      >
        <ViewWrapper height={this.state.height} padding={this.props.padding} color={this.props.color} presetValue={this.props.presetValue}>
          <Iframe url={this.props.websiteUrl} presetValue={this.props.presetValue}/>
        </ViewWrapper>
      </div>
    )

  }
}

export default WebView;
