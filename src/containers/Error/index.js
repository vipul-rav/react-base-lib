import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "web-ui-components/lib/organisms/cards";
import { Button } from "web-ui-components/lib/atoms/buttons";

class ErrorContainer extends Component {

    render() {
        return (
            <div className="col-xs1-24">
                <Card>
                    <div>
                        <h1 className="c-a-title">Sorry, there's been a technical problem</h1>
                        <div className="c-a-text-body u-margin-bottom-6">
                            <p>It looks like something's gone wrong in the background. Please return to the home screen and apply again later. If you're still having problems, please give us a call on 0800 707 6471.
                            </p>
                            <p>We're here Monday to Friday, 8am to 8pm, Saturday, 9am to 5pm and Sunday, 10am to 5pm.</p></div><div className="c-m-button-group">
                            <Button>
                                Return to home screen
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

ErrorContainer.propTypes = {
    config: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ baseProps: state });

export default connect(mapStateToProps)(ErrorContainer);

