import React from "react";
import Option from "./Option";

export default class Options extends React.Component {
    render() {
        return (
            <div>
                <button
                    className="button button--link" 
                    onClick={this.props.handleDeleteOptions}
                >
                    Remove All
                </button>
                {this.props.options.length === 0 && <p>Please enter an option to get started!</p>}
                {this.props.options.map((option) => 
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={this.props.handleDeleteOption}
                    />
                )}
            </div>
        );
    }
}