import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Loader } from "web-ui-components/lib/organisms/modals";

class LoaderContainer extends Component {

    render() {
        const { loader, config } = this.props;
        const { loading } = loader;
        const { externalContent } = config;
       
        return (
            <Loader isOpen={loading} title={externalContent.loaderTitle}
                body={externalContent.loaderBody} />
        );
    }
}

LoaderContainer.propTypes = {
    loader: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
};

LoaderContainer.defaultProps = {
    config: {
        externalContent: {
            loaderTitle: "Loader",
            loaderBody: "Please do not close your browser",
        },
    },
};

const mapStateToProps = state => ({ loader: state.loader, config: state.config });

export default connect(mapStateToProps)(LoaderContainer);

