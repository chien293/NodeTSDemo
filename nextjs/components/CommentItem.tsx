import React, { useState } from 'react';
import { Tooltip, Avatar, Button } from 'antd';
import { Comment as CommentUI } from '@ant-design/compatible';
import { LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled } from '@ant-design/icons';
import moment from 'moment';
import { Comment } from '../models/Comment';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  // const nestedComments = showReplies ? (comment.replies || []).map(reply => {
  //   return <CommentItem key={reply.id} comment={reply} />;
  // }) : null;

  return (
    <div style={{ marginBottom: '16px' }}>
      <CommentUI
        author={comment.author}
        avatar={<Avatar>{comment.author.charAt(0).toUpperCase()}</Avatar>}
        content={<p>{comment.body}</p>}
        datetime={
          <Tooltip title={moment(comment.created_at).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(comment.created_at).fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <Button type="link" onClick={handleShowReplies}>
            {showReplies ? 'Hide replies' : 'Show replies'}
          </Button>
        ]}
      >
        <div>
          <a href={comment.merge_request_link} target="_blank" rel="noopener noreferrer">
            Merge Request Link
          </a>
          <p>Project: {comment.project_name}</p>
        </div>
        {/* {nestedComments} */}
      </CommentUI>
    </div>
  );
};

export default CommentItem;
