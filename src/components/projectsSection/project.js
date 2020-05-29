import React from 'react';
import Heading from '../heading';
import './project.css'

class Project extends React.Component {
    constructor() {
        super();
        this.state = [{
            name: '',
            url: '',
            image: ''
        },
        {
            name: '',
            url: '',
            image: ''
        }];

        this.scrollRef = React.createRef();
        this.dis_projects = React.createRef();
    }

    handleScroll = () => {
        this.dis_projects.current.childNodes.forEach(element => {
            this.scrollRef.current.scrollLeft += element.offsetWidth;
        });
    }

    backScroll = () => {
        this.scrollRef.current.scrollLeft = 0;
    }

    render() {
        return (
            <div className="projectWrapper" >
                <Heading name="Projects" />
                <div id="scrollWrap" ref={this.scrollRef} className="scrollWrap">
                    <div ref={this.dis_projects} id="scroll" className="display-projects">
                        <div className="project1">

                        </div>
                        <div id="project2" className="project2">

                        </div>
                        <div id="project3" className="project3">

                        </div>
                        <div id="project4" className="project4">

                        </div>
                    </div>
                </div>
                {/* <button onClick={this.handleScroll}>Forward</button>
                <button onClick={this.backScroll}>Back</button> */}
            </div>
        )
    }
}

export default Project;