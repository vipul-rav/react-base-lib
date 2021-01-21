import React, { Component } from "react";
import PropTypes from "prop-types";
import routes from "../routes";
import { connect } from "react-redux";
import LoaderContainer from "../containers/Loader";
import HeaderContainer from "../containers/Header";
import ErrorContainer from "../containers/Error";
import { bindActionCreators } from "redux";
import { fetchConfig, setQueryParams, fetchContent } from "../redux/actions/configActions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isContentLoaded: false,
        };

    }
    
    componentDidMount() {
        console.log(this.props);
        const { fetchConfig, setQueryParams, fetchContent } = this.props;
        setQueryParams(this.props.scaProps);
        fetchConfig();
        fetchContent();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.baseProps.config && nextProps.baseProps.config.externalContent && !this.state.isContentLoaded) {
            this.setState({ isContentLoaded: true });
        }
    }

    render() {
        const { loader } = this.props.baseProps;
        if(!this.state.isContentLoaded) {
            return null;
        }
        return (
            <div className="o-page">
                <div className="o-global-content">
                    <div className="container container--sm u-margin-top-2">
                        <div className="row">
                            {!loader.showError ?
                                routes :
                                <ErrorContainer />}
                            <LoaderContainer />
                        </div>
                    </div>
                </div>
            </div>);
    }
}

const mapStateToProps = state => ({ baseProps: state });
const mapDispatch = dispatch => (bindActionCreators({
    fetchConfig,
    setQueryParams,
    fetchContent,
}, dispatch));

App.propTypes = {
    loader: PropTypes.shape({}).isRequired,
};

export default  connect(mapStateToProps, mapDispatch)(App);
