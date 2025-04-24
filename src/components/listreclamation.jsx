import React from 'react';
import { Avatar, List } from 'antd';
const data = [
  {
    title: 'Reclamation 1',
  },
  {
    title: 'Reclamation 2',
  },
  {
    title: 'Reclamation 3',
  },
  {
    title: 'Reclamation 4',
  },
];
const Listreclamation = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);
export default Listreclamation;