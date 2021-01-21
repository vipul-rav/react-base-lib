import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ContentWrapper = ({content,children}) => (
    children(content)
);

ContentWrapper.propTypes = {
    id: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.string)]).isRequired,
    children: PropTypes.func,
};

ContentWrapper.defaultProps = {
    children: content => <span>{content}</span>,
};

const mapStateToProps = state => ({
    content: state.config.externalContent,
});

export default  connect(mapStateToProps)(ContentWrapper);
