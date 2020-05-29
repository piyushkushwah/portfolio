import React from 'react';
import './skills.css'
import Heading from '../heading';
import { ScrollAnim } from '../scrollAnim';

class Skills extends React.Component {
    offsetHeight;
    constructor() {
        super();
        this.skills_anim = React.createRef();
        window.addEventListener('scroll', () => {
            let toggle = document.getElementById('skillsWrapper');
            this.offsetHeight = document.getElementById('skillsWrapper').offsetHeight - 150;
            // console.log(window.scrollY, document.getElementById('skillsWrapper').offsetHeight - 150);
            if (parseInt(window.scrollY) >= document.getElementById('skillsWrapper').offsetHeight - 150) {
                toggle.classList.add('do_anim');
            } else {
                if (window.scrollY === 0) {
                    toggle.classList.remove('do_anim');
                }
            }
        });
        // ScrollAnim('skillsWrapper', 'do_anim');
    }

    render() {
        return (
            <div ref={this.skills_anim} id="skillsWrapper" className="skillsWrapper">
                <Heading name="Skills" height={this.offsetHeight} />
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