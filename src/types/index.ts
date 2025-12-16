export interface Term {
  id: string;
  term: string;
  definition: string;
  category: "General" | "Health" | "Car" | "Life" | "Travel"; // Đã thêm Life và Travel
}

export interface ClaimStep {
  title: string;
  description: string;
  icon?: string; // Tên icon để map sau
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  type: "Public" | "Private" | "International";
}
