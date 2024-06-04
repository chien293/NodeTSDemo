'use client'
import React from 'react';
import CommentTable from '../components/CommentTable';
import { Comment } from '../models/Comment';
import { Layout, Menu } from 'antd';
import SelectItem from '../components/SelectItem';

const { Header, Content, Footer } = Layout;

const comments: Comment[] = [
  {
    id: 1,
    body: "This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text.  This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text.",
    author: "User1",
    created_at: "2023-05-01T12:34:56Z",
    project_name: "Project ABC",
    merge_request_link: "https://github.com/owner/repo/pull/1"
  },
  {
    id: 2,
    body: "This is a reply to the top level comment",
    author: "User2",
    created_at: "2023-05-01T13:00:00Z",
    project_name: "Project ABC",
    merge_request_link: "https://github.com/owner/repo/pull/1",
    parent_id: 1
  },
  {
    id: 3,
    body: "Another top level comment",
    author: "User3",
    created_at: "2023-05-02T08:20:00Z",
    project_name: "Project XYZ",
    merge_request_link: "https://github.com/owner/repo/pull/2"
  }
];

const selectedComment: Comment[] = [
  {
    id: 1,
    body: "This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text.  This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text. This is a top level comment with a very long text.",
    author: "User1",
    created_at: "2023-05-01T12:34:56Z",
    project_name: "Project ABC",
    merge_request_link: "https://github.com/owner/repo/pull/1"
  },
  {
    id: 2,
    body: "This is a reply to the top level comment",
    author: "User2",
    created_at: "2023-05-01T13:00:00Z",
    project_name: "Project ABC",
    merge_request_link: "https://github.com/owner/repo/pull/1",
    parent_id: 1
  },
];

const CommentsPage: React.FC = () => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ marginTop: '20px' }}>
          <h1>Comments</h1>
          <CommentTable comments={comments} />
          <SelectItem allComment={comments} selectedComment={selectedComment} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default CommentsPage;
