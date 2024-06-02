import React, { useState } from 'react';
import CommentItem from './CommentItem';
import { Comment } from '../models/Comment';
import { Pagination } from 'antd';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedComments = comments.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      {paginatedComments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={comments.length}
        onChange={handlePageChange}
        style={{ marginTop: '20px', textAlign: 'center' }}
      />
    </div>
  );
};

export default CommentList;
