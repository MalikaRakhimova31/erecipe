interface statusesProps {
  all: string;
  issuedByDoctor: string;
  issuedByPharmacy: string;
  issued: string;
  declined: string;
  expired: string;
  new: string;
}

const statuses: statusesProps = {
  all: "ALL",
  issuedByDoctor: "issuedByDoctor",
  issuedByPharmacy: "issuedByPharmacy",
  issued: "issued",
  declined: "declined",
  expired: "expired",
  new: "new",
};

export default statuses;
