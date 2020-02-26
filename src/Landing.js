import React from 'react';

export class Landing extends React.Component {
    render() {
        return(
            <div className="landing">
                <h2>Finding a place to eat, made easy.</h2>
                <button className="startButton" onClick={this.props.onChange}>
                    Get Started
                </button>
            </div>
        )
    }
}