import * as z from 'zod';

const createRoomSchema = z.object({
  name: z.string().min(3).max(10),
  description: z.string().min(3).max(50),
  tags: z.string(),
  githubRepo: z.string(),
});

export default createRoomSchema;