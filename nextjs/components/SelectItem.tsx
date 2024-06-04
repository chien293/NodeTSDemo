import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { Comment } from "../models/Comment";
import { Pagination, Select } from "antd";
const { Option } = Select;

interface CommentListProps {
  allComment: Comment[];
  selectedComment: Comment[];
}

const SelectItem: React.FC<CommentListProps> = ({
  allComment,
  selectedComment,
}) => {
  const [selectedValues, setSelectedValues] = useState(
    selectedComment.map((comment) => comment.id)
  );
  const [currentValues, setCurrentValues] = useState([]);

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
    setCurrentValues(value);
  };

  const handleClick = (e: any) => {
    console.log(currentValues);
    setSelectedValues(currentValues);
  };

  return (
    <div className="site-layout-content" style={{ marginTop: "20px" }}>
      <button onClick={handleClick}>Add</button>
      <div className="flex flex-row gap-2">
        {selectedComment.map((value) => value.id)}
      </div>
      <Select
        showSearch
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Please select"
        optionFilterProp="children"
        defaultValue={selectedValues}
        onChange={handleChange}
      
      >
        {allComment.map((comment) => (
          <Option key={comment.id} value={comment.id}>
            {comment.author}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectItem;
