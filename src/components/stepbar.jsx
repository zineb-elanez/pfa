import React from 'react';
import { Steps } from 'antd';

const description = 'This is a description.';

const StepBar = () => (
  <Steps
    direction="vertical"
    size="small"
    current={1}
    items={[
      { title: 'Finished', description },
      { title: 'In Progress', description },
      { title: 'Waiting', description },
    ]}
  />
);

export default StepBar;
