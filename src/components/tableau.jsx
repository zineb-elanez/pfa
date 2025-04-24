import React from 'react';
import "../index.css";
import { DownOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";

// Définition des colonnes de la table
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

// Données de la table
const data = Array.from({ length: 10 }).map((_, i) => ({
  key: i,
  name: "John Brown",
  age: Number(`${i}2`),
  address: `New York No. ${i} Lake Park`,
  description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
}));

// Configuration pour les lignes extensibles
const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};

// Configuration du titre
const defaultTitle = () => "Here is title";

const Tableau= () => {
  // Propriétés fixes de la table
  const tableProps = {
    bordered: false, // Pas de bordure
    loading: false, // Pas de chargement
    size: "large", // Taille par défaut
    expandable: defaultExpandable, // Lignes extensibles activées
    title: defaultTitle, // Afficher le titre
    showHeader: true, // Afficher l'en-tête
    rowSelection: {}, // Sélection de lignes activée
    scroll: { y: 240 }, // Défilement vertical fixe
    tableLayout: undefined, // Disposition par défaut
  };

  return (
    <Table
      {...tableProps}
      pagination={{
        position: ["bottomCenter"],
        pageSize: 5,
        total: data.length,
        showSizeChanger: false,
        simple: true,}}
      columns={columns}
      dataSource={data}
      scroll={{ y: 240 }} // Défilement vertical
    />
    
  );
};

export default Tableau;
