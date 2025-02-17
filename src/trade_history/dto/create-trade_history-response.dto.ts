import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const schema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export class CreateTradeHistroryResponseDTO extends createZodDto(schema) {}
