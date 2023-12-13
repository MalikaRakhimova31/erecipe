import type { BaseParams, ListResponse } from "@/types";

interface OrdersTypes {
  id: number;
  qty: number;
  recipe: {
    id: number;
    uid: string;

    patient: {
      id: number;
      firstname: string;
      lastname: string;
      middlename: string;
    };
    status:
      | "issuedByDoctor"
      | "issuedByPharmacy"
      | "issued"
      | "declined"
      | "expired"
      | "new";
    created_at: string;
  };
  created_at: string;
}

interface OrderParams extends BaseParams {
  recipe_uid?: string;
  search?: string;
}

interface OrderItemTB {
  name: string;
  mnn: string;
  quantity: number | string;
  appointment: string;
  organization: string;
  status: React.ReactElement;
}

interface ItemsProps {
  id: number;
  order_item: {
    drug: string;
    organization: {
      ru: string;
      uz: string;
      uzc: string;
    };
  };
  mnn: {
    ru: string;
    uz: string;
    uzc: string;
  };
  unit: number | string;
  method: {
    ru: string;
    uz: string;
    uzc: string;
  };
}

interface OrderItemTypes {
  id: string;
  uid: string;
  items: ItemsProps[];
}

interface TableProps {
  id: string;
  createdAt: string;
  given: string;
  patient: string;
  quantity: string;
  status: React.ReactElement;
  action: React.ReactElement;
}

interface OrderItemState {
  orderItem: OrderItemTypes | undefined;
  orderItemLoading: boolean;
  tableHeader: string[] | undefined;
  tableBody: OrderItemTB[] | undefined;
}

interface OrderState {
  orders: ListResponse<OrdersTypes[]> | undefined;
  ordersLoading: boolean;
  currentPage: number;
  setCurrentPage: (s: number) => void;
  tableBody: TableProps[] | undefined;
  PAGE_SIZE: number;
  search: string;
  setSearch: (s: string) => void;
}

export type {
  OrdersTypes,
  OrderParams,
  OrderState,
  OrderItemState,
  OrderItemTypes,
};
