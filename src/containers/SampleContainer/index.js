import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {getAccountList } from "../../redux/actions/account";
import { navigateToSample2 } from "../../redux/actions/sampleAction";
import { withRouter } from "react-router-dom";
import SampleComponent from "../../components/SampleComponent";

class SampleContainer extends Component {
    constructor(props) {
        super(props);
        this.continueClick = this.continueClick.bind(this);
    }
 
    continueClick() {
        const { navigateToSample2 } = this.props;
        navigateToSample2();
    }

    render() {
        const { config: { externalContent } } = this.props.baseProps;
        
        return (
            <div className="c-o-card">
                <h1>Home Page</h1>
                <button onClick={this.continueClick}> {externalContent.btnContinue} </button>
                <SampleComponent />
            </div>
        );
    }
}

SampleContainer.propTypes = {
    baseProps: PropTypes.object.isRequired,
    navigateToSample2: PropTypes.func,
};

const mapStateToProps = state => ({ baseProps: state });
const mapDispatch = dispatch => (bindActionCreators({
    navigateToSample2,
    getAccountList,
}, dispatch));

export default withRouter(connect(mapStateToProps, mapDispatch)(SampleContainer));

