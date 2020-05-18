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
    }
    render() {
        return (
            <div className="projectWrapper">
                <Heading name="Projects" />
                <div className="display-projects">
                    <div className="project1">

                    </div>
                    <div className="project1">

                    </div>
                    <div className="project1">

                    </div>
                    <div className="project1">

                    </div>
                </div>
            </div>
        )
    }
}

export default Project;