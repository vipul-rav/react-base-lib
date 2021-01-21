import React from "react";
import PropTypes from "prop-types";

const SampleComponent = () => (
    <div>
        A sample component with text:
    </div>
);

SampleComponent.propTypes = {
    text: PropTypes.string.isRequired,
};

export default SampleComponent;
