import React, { Component } from 'react';
import Presets from '../Presets/Presets';
import './header.scss';

const ColorInput = (props) => {

  return (
    <div>
      <input 
        type="color" 
        value={props.color} 
        onInput={(e) => props.changeColor(e)} 
        onChange={(e) => props.changeColor(e)}
      />
    </div>
  )
}

const UrlInput = (props) => {
  return (
    <div>
      <input 
        type="url"
        value={props.websiteUrl}
        placeholder="https://example.com"
        pattern="https://.*" size="30"
        onChange={(e) => props.changeUrl(e)}
        required
      />
    </div>
  )
}

const PaddingInput = (props) => {
  return (
    <div>
      <input
        type="text"
        value={props.padding}
        onChange={(e) => props.changePadding(e)}
      />
    </div>
  )
}


class Header extends Component {


  render() {

    const {
      websiteUrl,
      color,
      padding,
      presetValue,
      changeColor,
      changeUrl,
      changePadding,
      changePreset,
    } = this.props;

    return (
      <div className="Header">
        <div className="Header--inner">
          <Presets
            presetValue={presetValue}
            onPresetChange={changePreset}
          />
          <ColorInput
            color={color}
            changeColor={changeColor}
          />
          <UrlInput
            websiteUrl={websiteUrl}
            changeUrl={changeUrl}
          />
          <PaddingInput
            padding={padding}
            changePadding={changePadding}
          />
        </div>
      </div>
    )    
  };
}

export default Header;
