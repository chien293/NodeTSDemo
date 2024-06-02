import React, { useState } from 'react';
import { Table, Tooltip, Tag } from 'antd';
import moment from 'moment';
import { Comment } from '../models/Comment';
import { wrap } from 'module';

interface CommentTableProps {
  comments: Comment[];
}

const CommentTable: React.FC<CommentTableProps> = ({ comments }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<number[]>([]);

  const handleExpand = (expanded: boolean, record: Comment) => {
    const keys = expanded ? [...expandedRowKeys, record.id] : expandedRowKeys.filter(key => key !== record.id);
    setExpandedRowKeys(keys);
  };

  const columns = [
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
      width: 500,
      ellipsis: true,
      render: (text: string) => (
        <Tooltip title={text}>
          <span style={{textWrap: "wrap"}}>{text}</span>
        </Tooltip>
      ),
    },
    {
      title: 'Project Name',
      dataIndex: 'project_name',
      key: 'project_name',
      render: (text: string) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: 'Merge Request Link',
      dataIndex: 'merge_request_link',
      key: 'merge_request_link',
      render: (text: string) => <a href={text} target="_blank" rel="noopener noreferrer">View Merge Request</a>,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text: string) => (
        <Tooltip title={moment(text).format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment(text).fromNow()}</span>
        </Tooltip>
      ),
    }
  ];

  const dataWithKey = comments.map(comment => ({ ...comment, key: comment.id }));

  const expandedRowRender = (parentId: number) => {
    const childComments = comments.filter(comment => comment.parent_id === parentId);
    return (
      <Table
        columns={columns}
        dataSource={childComments.map(comment => ({ ...comment, key: comment.id }))}
        pagination={false}
        showHeader={false}
        rowClassName={() => 'nested-row'}
      />
    );
  };

  return (
    <Table
      columns={columns}
      dataSource={dataWithKey.filter(comment => !comment.parent_id)}
      expandable={{
        expandedRowKeys,
        onExpand: handleExpand,
        expandedRowRender: record => expandedRowRender(record.id)
      }}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default CommentTable;
