// components/StepBar.jsx
import React from 'react';
import { Steps } from 'antd';
import '../index.css';

const description = 'This is a description.';

const StepBar = () => (
  <Steps
    current={1}
    percent={60}
    items={[
      {
        title: 'Waiting',
        description,
        status:'finish'
      },
      {
        title: 'In Progress',
        subTitle: 'Left 00:00:08',
        description,
        status:'process'
      },
      
      {
        title: 'Finished',
        description,
      },
    ]}
  />
);

export default StepBar;
