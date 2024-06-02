export interface Comment {
  id: number;
  body: string;
  author: string;
  created_at: string;
  project_name: string;
  merge_request_link: string;
  parent_id?: number;  // Thêm parent_id để xác định comment con
}
