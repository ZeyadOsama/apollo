import React from 'react';
import {HiOutlineDownload} from 'react-icons/hi';

export class DownloadButton extends React.Component {
    render() {
        return (
            <button className="btn btn-default" id="download-icon">
                <HiOutlineDownload/>
            </button>
        );
    }
}
