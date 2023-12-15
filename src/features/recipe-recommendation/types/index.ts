interface RecommendationParams {
  recipe__uid: string | undefined;
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
  unit: number;
  method: {
    ru: string;
    uz: string;
    uzc: string;
  };
}

interface RecommendationTypes {
  id: 141;
  uid: string;
  items: ItemsProps[];
}

interface RecipeItemProps {
  id: number;
  recipe: number;
  mnn: {
    id: number;
    code: number;
    name: {
      ru: string;
      uz: string;
      uzc: string;
    };
  };
  status: string;
  unit: {
    id: number;
    name: {
      ru: string;
      uz: string;
      uzc: string;
    };
    key: string;
    created_at: string;
  };
  method: {
    id: number;
    name: {
      ru: string;
      uz: string;
      uzc: string;
    };
    key: string;
    created_at: string;
  };
  note: string;
}

interface OrderItemsArray {
  drug: string | number;
  recipe_item: string | number;
  total: number;
}
interface OrderType {
  recipe: number;
  pharmacy: string;
  items: OrderItemsArray[];
}

export type {
  RecommendationParams,
  RecommendationTypes,
  RecipeItemProps,
  OrderType,
};
