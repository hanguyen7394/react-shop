import { ConfigProvider, Skeleton } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  columns: ${(props) => props.$columns};
  gap: 15px;
`;

const Item = styled.div`
  min-height: ${(props) => props.$height};
`;

const SkeletonLoading = ({ className = '', theme = 'light', height = '30vh', rows = 8, style, columns = 1 }) => {
  return (
    <Wrapper $columns={columns} style={style}>
      <ConfigProvider
        theme={{
          token: {
            colorFill: theme === 'light' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)',
            colorFillContent: theme === 'light' ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)',
          },
        }}
      >
        {Array(columns)
          .fill('')
          .map((_, index) => (
            <Item key={index} className={className} $height={height}>
              <Skeleton
                paragraph={{
                  rows: rows,
                  width: '90%',
                }}
                active
              />
            </Item>
          ))}
      </ConfigProvider>
    </Wrapper>
  );
};

export default SkeletonLoading;
