import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import history from './History';
import axios from 'axios';

import '../../css/styles.css';
import '../../css/animation.css'

// export class Home extends Component {
//     state = {
//         selectedFile: null,
//         source: ""
//     }
//
//     onFileChange = event => {
//         this.setState({selectedFile: event.target.files[0], source: event.target.files[0].name});
//     };
//
//     onFileUpload = () => {
//         const formData = new FormData();
//         this.formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);
//         console.log(this.state.selectedFile.name);
//         const url = process.env.APP_URL || 'http://localhost:5000/';
//         axios.post(url, formData);
//         history.push("/Tools");
//     }
//
//     render() {
//         return (
//             <Container>
//                 <div class="animation sequence fadeInBottom-narrow">
//
//                     <h1 class="title">
//                         Attach Your Audio File Below
//                     </h1>
//
//                     <br/><br/>
//
//                     <form class="container-33 md-form">
//
//                         <input class="container-100 form-control btn btn-outline-light"
//                                name='file'
//                                type="file"
//                                required="required"
//                                onChange={this.onFileChange}/>
//
//                         <br/><br/>
//
//                         <button class="container-100 blurry btn btn-outline-light text-uppercase"
//                                 onClick={this.onFileUpload}>
//                             Upload
//                         </button>
//                     </form>
//
//                 </div>
//             </Container>
//         );
//     }
// }

export class Home extends Component {
    state = {
        selectedFile: null,
        source: ""
    }

    onFileChange = event => {
        this.setState({selectedFile: event.target.files[0], source: event.target.files[0].name});
    };

    onFileUpload = () => {
        const formData = new FormData();
        formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);
        console.log(this.state.selectedFile.name);
        const url = process.env.APP_URL || 'http://localhost:5000/';
        axios.post(url, formData);
        history.push("/Tools");
    }

    render() {
        return (
            <Container>
                <div class="animation sequence fadeInBottom-narrow">

                    <h1 class="title">
                        Attach Your Audio File Below
                    </h1>

                    <br/><br/>

                    <form class="container-33 md-form">

                        <input class="container-100 form-control btn btn-outline-light"
                               name='file'
                               type="file"
                               required="required"
                               onChange={this.onFileChange}/>

                        <br/><br/>

                        <button class="container-100 blurry btn btn-outline-light text-uppercase"
                                onClick={this.onFileUpload}>
                            Upload
                        </button>
                    </form>

                </div>
            </Container>
        );
    }
}