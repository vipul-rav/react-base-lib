import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppRouter } from './routes';
import { LoaderComponent } from './components/Loader';
import { HeaderComponent } from './components/Header';
import { ErrorComponent } from './components/Error';
import { fetchContent, fetchConfig } from './redux/actions/configAction';

const AppComponent = memo(function AppComponent({
  loader,
  error,
  content,
  fetchConfig,
  fetchContent,
  configUrl,
  contentUrl,
  defaultRoute
}) {
  const [isContentLoaded, updateContentLoaded] = useState(false);
  useEffect(() => {
    fetchConfig(configUrl);
    fetchContent(contentUrl);
  }, [configUrl, contentUrl, fetchConfig, fetchContent]);

  useEffect(() => {
    updateContentLoaded(!!content);
  }, [content]);

  return isContentLoaded ? (
    <div>
      <HeaderComponent />
      <div>
        <ErrorComponent hasError={error.showError} content={content}>
          <AppRouter defaultRoute={defaultRoute} />
          <LoaderComponent isLoading={loader.loading} text={'test'} />
        </ErrorComponent>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
});

const mapStateToProps = (state) => ({
  loader: state.loader,
  error: state.error,
  content: state.config.externalContent
});
const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      fetchConfig,
      fetchContent
    },
    dispatch
  );

AppComponent.propTypes = {
  loader: PropTypes.shape({
    loading: PropTypes.bool
  }),
  error: PropTypes.shape({
    loading: PropTypes.bool
  }),
  content: PropTypes.object.isRequired,
  fetchConfig: PropTypes.func,
  fetchContent: PropTypes.func,
  configUrl: PropTypes.string,
  contentUrl: PropTypes.string
};

const App = connect(mapStateToProps, mapDispatch)(AppComponent);

export { App };
