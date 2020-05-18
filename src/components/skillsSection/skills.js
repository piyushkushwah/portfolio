import React from 'react';
import './skills.css'
import Heading from '../heading';

class Skills extends React.Component {

    render() {
        return (
            <div className="skillsWrapper">
                <Heading name="Skills" />
                <div className="tech_logo">
                    <div className="sec_1">
                        <img className="react" src={require("../../assets/img/react.png")} alt="react_logo" />
                        <img className="node" src={require("../../assets/img/node.png")} alt="node_logo" />
                        <img className="angular" src={require("../../assets/img/angular.png")} alt="angular_logo" />
                    </div>
                    <div className="sec_2">
                        <img className="html" src={require("../../assets/img/html.png")} alt="html_logo" />
                        <img className="js" src={require("../../assets/img/javascript.png")} alt="js_logo" />
                        <img className="css" src={require("../../assets/img/css.png")} alt="css_logo" />
                    </div>
                    <div className="sec_3">
                        <img className="redux" src={require("../../assets/img/redux.png")} alt="redux_logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;