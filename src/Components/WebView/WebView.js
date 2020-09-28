import React, { Component } from 'react';
import './WebView.scss';


const ViewWrapper = (props) => {
  let wrapper;
  if (props.presetValue !== 'none') {

    let className = 'ViewWrapperBox';
    if (props.presetValue) {
      className += ` preset-${props.presetValue}`;
    }

    const ViewWrapperStylesTwo = {
      width: props.maxWidth,
      // margin: '0 auto',
    }

    wrapper = (
      <div className="ViewWrapper">
        <div className={className} style={ViewWrapperStylesTwo}>
          {props.children}
        </div>
      </div>
    )
  } else {
    wrapper = (
      <div className="ViewWrapper">
        {props.children}
      </div>
    )
  }
  return wrapper;
}

class Iframe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxWidth: 0
    }
  }

  componentDidMount() {
    const width = this.divElement.clientWidth;
    this.setState({ boxWidth: width });
  }

  render() {
    let iframeStyle;
    let iframeInnerStyles;
    const factorScale = (this.state.boxWidth - (parseFloat(this.props.padding) * 2)) / 1400;
    const scale = factorScale;
    const widthHeight = 100 / scale;
    iframeStyle = {
      transform: `scale(${scale})`,
      transformOrigin: '0 0',
      width: `${widthHeight}%`,
      height: `${widthHeight}%`,
    }
    if (this.props.presetValue === '11') {
      iframeInnerStyles = {
        height: '60%',
      }
    }
    const iframeWrapperStyles = {
      padding: this.props.padding,
      backgroundColor: this.props.color,
    }
    return (
      <div 
        className="IframeWrapper" 
        style={iframeWrapperStyles}
        ref={ (divElement) => { this.divElement = divElement } }
      >
        <div className="IframeInner" style={iframeInnerStyles}>
          <iframe
            style={iframeStyle}
            title="Website Preview"
            width="100%"
            height="100%"
            src={this.props.url}
          >
        </iframe>
        </div>
      </div>
    );
  }
}

class WebView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewHeight: 0,
      viewWidth: 0
    }
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    this.setState({ viewHeight: height, viewWidth: width});
  }

  render() {

    const {
      viewWidth,
      viewHeight
    } = this.state;

    let maxWidthSquare = viewWidth;
    if (viewWidth > viewHeight) {
      maxWidthSquare = viewHeight;
    }
    return (
      <div
        className="ViewWrapperOuter"
        ref={ (divElement) => { this.divElement = divElement } }
      >
        <ViewWrapper maxWidth={maxWidthSquare} presetValue={this.props.presetValue}>
          <Iframe url={this.props.websiteUrl} presetValue={this.props.presetValue} padding={this.props.padding} color={this.props.color} />
        </ViewWrapper>
      </div>
    )

  }
}

export default WebView;
