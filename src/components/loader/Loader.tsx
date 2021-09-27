import React from 'react';
import { Spin } from 'antd';
import './style.css';

export const Loader = (): JSX.Element => (
  <div className="App__themes_loading">
    <Spin size="large" />
  </div>
);
