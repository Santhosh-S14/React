import React from "react";

export default class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
                <button 
                    className="button button--link"
                    onClick={(e) => {
                        {this.props.handleDeleteOption(this.props.optionText)}
                    }}>
                remove
                </button>
            </div>
        );
    }
};
