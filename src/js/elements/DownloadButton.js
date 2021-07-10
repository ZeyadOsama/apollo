import React from 'react';
import {HiOutlineDownload} from 'react-icons/hi';

import '../../css/download.css';

export class DownloadButton extends React.Component {

    constructor(props) {
        super(props);
        this.file = props.file;
        this.url = process.env.APP_URL || 'http://localhost:5000/';
    }

    render() {
        return (
            <button className="btn btn-default download-btn">
                <a href={this.url + this.file} download>
                    <HiOutlineDownload/>
                </a>
            </button>
        );
    }
}
