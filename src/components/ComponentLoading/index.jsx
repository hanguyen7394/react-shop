import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const ComponentLoading = ({...rest}) => {
  return (
    <Loading {...rest}>
      <Spin />
    </Loading>
  );
};

export default ComponentLoading;