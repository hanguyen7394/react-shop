import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from 'react-share';

const ShareLink = ({ path, title, image, type, children }) => {
  switch (type) {
    case 'twitter':
      return (
        <TwitterShareButton title={title} url={path}>
          <Link className="social-icon" title='Twitter' target="_blank">
            {children}
          </Link>
        </TwitterShareButton>
      );
    case 'pinterest':
      return (
        <PinterestShareButton title={title} media={image} url={path}>
          <Link className="social-icon" title='Pinterest' target="_blank">
            {children}
          </Link>
        </PinterestShareButton>
      );
    default:
      return (
        <FacebookShareButton title={title} url={path}>
          <Link className="social-icon" title='Facebook' target="_blank">
            {children}
          </Link>
        </FacebookShareButton>
      );
  }
};

export default ShareLink;
