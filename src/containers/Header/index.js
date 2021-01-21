import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header } from "web-ui-components/lib/organisms/global";

class HeaderContainer extends Component {

    render() {
        const { config } = this.props.baseProps;
        return (
            <Header bankId={config.bank_id || "CB"} title="Homepage" />
        );
    }
}

HeaderContainer.propTypes = {
    config: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ baseProps: state});

export default connect(mapStateToProps)(HeaderContainer);

