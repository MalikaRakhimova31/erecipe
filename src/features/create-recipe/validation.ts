import * as z from "zod";

const ItemsSchema = z.array(
  z.object({
    mnn: z.object({ value: z.string(), label: z.string().min(3) }),
    unit: z.object({ value: z.string(), label: z.string().min(3) }),
    method: z.object({
      value: z.string(),
      label: z.string(),
    }),
    note: z.string().min(3),
  }),
);

const FormSchema = z.object({
  items: ItemsSchema,
});

export default FormSchema;
