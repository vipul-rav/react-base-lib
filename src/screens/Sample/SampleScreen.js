import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SampleComponent } from './SampleComponent';

const SampleScreen = memo(function Sample({ postList, getPostList, navigateToNextScreen, content }) {
  useEffect(() => {
    getPostList();
  }, [getPostList]);
  return (
    <div>
      <h1>{content.homePageText}</h1>
      <SampleComponent postList={postList} content={content} />
      <button id="btnContinue" onClick={() => navigateToNextScreen('/sample1')}>
        <span>{content.btnContinue}</span>
      </button>
    </div>
  );
});

SampleScreen.propTypes = {
  navigateToNextScreen: PropTypes.func,
  content: PropTypes.object.isRequired,
  getPostList: PropTypes.func,
  postList: PropTypes.array
};

export { SampleScreen };
