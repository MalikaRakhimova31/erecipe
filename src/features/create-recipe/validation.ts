import * as z from "zod";

const ItemsSchema = z.array(
  z.object({
    mnn: z.object({ value: z.string().min(3), label: z.string().min(3) }),
    drugType: z.object({ value: z.string().min(3), label: z.string().min(3) }),
    drugTypeDetails: z.object({
      value: z.string().min(3),
      label: z.string().min(3),
    }),
    note: z.string().min(3),
  }),
);

const FormSchema = z.object({
  items: ItemsSchema,
});

export default FormSchema;
