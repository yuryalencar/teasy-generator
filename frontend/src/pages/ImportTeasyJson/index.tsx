import React, { useState } from "react";
import { Link, Redirect, useHistory } from 'react-router-dom';

import logoImg from '../../assets/teste.png'
import tutorial from '../../assets/tutorial.svg'
import github from '../../assets/github-icon.svg'
import database from '../../assets/database-icon.svg'
import paper from '../../assets/file-icon.svg'

import './styles.css'


const ImportTeasyJson: React.FC = (props: any) => {

    const history = useHistory();
    const [teasyJson, setTeasyJson] = useState("");

    function goToMountTree() {
        if (checkField()) {
            console.log("Erro if")
        } else {
            console.log("Erro else")

            history.push(
                "/choose-root",
                { teasyJson }
            );
        }
    }

    function checkField() {
        return teasyJson.trim() === "";
    }

    return (
        <div className="home-container">
            <div className="header">
                <img width="300px" src={logoImg} alt='Teasy' />
            </div>


            <div className="content-center">

                <span>Teasy JSON</span>
                <textarea
                    name="textarea"
                    onChange={e => setTeasyJson(e.target.value)}
                >
                </textarea>
            </div>
            <a href="/" >
                {/* <i className="fa fa-chevron-left" aria-hidden="true"></i> */}
                Back
            </a>
            <div className="letsbtn">
                <button type="button" className="letsgo"
                    onClick={goToMountTree}
                >Let's Go!</button>
            </div>

            <div className="footer">
                <a href="#">
                    <img className="img-l" width="40px" src={tutorial} alt='Teasy' />
                </a>
                <a href="https://github.com/yuryalencar/TeasyFSMGenerator" target="blank">
                    <img className="img-r" width="40px" src={github} alt='Teasy' />
                </a>
            </div>

        </div>

    );
}

export default ImportTeasyJson;
