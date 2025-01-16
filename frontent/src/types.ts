export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

export interface CustomerInquiry {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  type: 'contact' | 'partnership';
}

export interface VisitorData {
  id: string;
  page_visited: string;
  timestamp: string;
  session_id: string;
}