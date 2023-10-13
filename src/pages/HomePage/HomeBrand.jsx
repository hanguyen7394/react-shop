import React from 'react';

const HomeBrand = ({ brands }) => {
  return (
    <div className="container">
      {!!brands?.length && (
        <div
          className="owl-carousel mt-5 mb-5 owl-simple"
          data-toggle="owl"
          data-owl-options='{
            "nav": false,
            "dots": false,
            "margin": 30,
            "loop": false,
            "responsive": {
              "0": {
                "items":2
              },
              "420": {
                "items":3
              },
              "600": {
                "items":4
              },
              "900": {
                "items":5
              },
              "1024": {
                "items":6
              }
            }
          }'
        >
          {brands?.map((image, index) => (
            <a key={index} href="#" className="brand">
              <img src={image || '/assets/images/brands/1.png'} alt="Brand Name" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeBrand;
