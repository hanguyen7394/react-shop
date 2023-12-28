import React, { useEffect } from 'react';

const BlogAds = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="widget widget-banner-sidebar">
      <div className="banner-sidebar-title">ad box 280 x 280</div>
      <div className="banner-sidebar banner-overlay">
        <a href="#">
          <img src="/assets/images/blog/sidebar/banner.jpg" alt="banner" />
        </a>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-12121212"
          data-ad-slot="12121212"
          data-ad-format="auto"
        />
      </div>
    </div>
  );
};

export default BlogAds;
