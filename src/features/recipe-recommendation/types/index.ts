interface RecommendationParams {
  uid: string | undefined;
}

interface ItemsProps {
  id: number;
  recipe: number;
  mnn: {
    id: number;
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

    created_at: string;
  };
  method: {
    id: number;
    name: {
      ru: string;
      uz: string;
      uzc: string;
    };

    created_at: string;
  };
  note: string;
}

interface RecommendationTypes {
  id: 141;
  uid: string;
  status: string;
  patient: {
    id: number;
    uid: string;
    firstname: string;
    lastname: string;
    middlename: string;
    nnuzb: string;
    ppn: string;
    tppn: string;
    bct: string;
    gender: "female" | "male";
    birth_date: string;
  };
  practitioner: {
    id: number;
    username: string;
    email: string;
    uid: number;
    firstname: string;
    lastname: string;
    middlename: string;
    nnuzb: string;
    ppn: string;
    tppn: string;
    gender: "female" | "male";
    birth_date: string;
    organization: {
      id: number;
      uid: string;
      medicals: number[];
      levels: number[];
      parent: 202;
      name: {
        ru: string;
        uz: string;
        uzc: string;
      };
    };
  };
  items: ItemsProps[];
  created_at: string;
  orders: any[];
}

export type { RecommendationParams, RecommendationTypes };
