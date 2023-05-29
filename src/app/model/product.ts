export interface Product {
    name: string;
    price: number;
    quantity: number;
    manufactureDate: string;
    expireDate: string;
    available: boolean;
    freshness: string;
    category?:string;
    isEditing?: boolean;
  }
  