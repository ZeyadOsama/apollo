import React from 'react';
import { HiOutlineDownload } from 'react-icons/hi';

export default class DownloadButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: " Download",
      
    };
  }

  render() {
    return (
      
      <button className="btn btn-default" id="downloadicon">
        <HiOutlineDownload/>
        {this.state.text}
       
      
      </button>

    
    );
  }
}