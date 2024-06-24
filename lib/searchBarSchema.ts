import * as z from 'zod';


export const searchBarSchema = z.object({
  search: z.string().min(3).max(15),
});