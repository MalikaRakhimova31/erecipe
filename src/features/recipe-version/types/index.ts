interface PatientTypes {
  id: number;
  uid: string;
  firstname: string;
  lastname: string;
  middlename: string;
  nnuzb: string;
  ppn: string;
  tppn: string;
  bct: string;
  gender: "male" | "female";
  birth_date: Date;
}

interface PractitionerTypes {
  id: number;
  username: string;
  email: string;
  uid: string;
  firstname: string;
  lastname: string;
  middlename: string;
  nnuzb: string;
  ppn: string;
  tppn: string;
  gender: "male" | "female" | null;
  birth_date: string | null;
  organization: {
    id: number;
    uid: string;
    status: boolean;
    services: Array<string | number>;
    medicals: Array<string | number>;
    levels: Array<string | number>;
    parent: string | number;
    name: {
      ru: string;
      uz: string;
      uzc: string;
    };
  };
}

interface RecipeDetailsTypes {
  id: number;
  uid: string;
  status:
    | "issuedByDoctor"
    | "issuedByPharmacy"
    | "issued"
    | "declined"
    | "expired"
    | "new";
  patient: PatientTypes;
  practitioner: PractitionerTypes;
  items: Array<string | number>;
  created_at: Date;
}

export type { RecipeDetailsTypes, PatientTypes, PractitionerTypes };
