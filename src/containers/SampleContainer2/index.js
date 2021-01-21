import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SampleContainer2 extends Component {

    render() {
       
        return (
            <div className="c-o-card">
                <h1>Sample Page 2</h1>
            </div>
        );
    }
}

SampleContainer2.propTypes = {
    headingText: PropTypes.string,
    loader: PropTypes.object.isRequired,
    getAccountList: PropTypes.func,
    config: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ loader: state.loader, config: state.config });

export default  connect(mapStateToProps)(SampleContainer2);

