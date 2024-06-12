import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

import { Comment } from "../models/Comment";

interface DataNode {
  key: number;
  title: string;
  author: string;
  created_at: string;
  children?: DataNode[];
}

interface Props {
  comments: Comment[];
}

const DiscussionTable: React.FC<Props> = ({ comments }) => {
  const generateTreeData = (comments: Comment[]): DataNode[] => {
    const commentMap = new Map<number, DataNode>();
    const treeData: DataNode[] = [];

    comments.forEach(({ id, body, author, created_at, parent_id }) => {
      const dataNode: DataNode = { key: id, title: body, author, created_at };
      commentMap.set(id, dataNode);

      if (parent_id) {
        const parent = commentMap.get(parent_id);
        if (parent) {
          parent.children = [...(parent.children || []), dataNode];
        }
      } else {
        treeData.push(dataNode);
      }
    });

    return treeData;
  };

  const columns: ColumnsType<DataNode> = [
    { title: "Comment", dataIndex: "title", key: "title" },
    { title: "Author", dataIndex: "author", key: "author" },
    { title: "Created At", dataIndex: "created_at", key: "created_at" },
  ];

  return (
    <Table
      columns={columns}
      dataSource={generateTreeData(comments)}
      expandable={{
        rowExpandable: (record) =>
          !!record.children && record.children.length > 0,
      }}
    />
  );
};

export default DiscussionTable;
