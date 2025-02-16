import { createZodDto } from 'nestjs-zod';
import { number, string, z } from 'zod';

//create a zod schema
const CreateTradeHistorySchema = z.object({
  trade_type: string().min(1),
  symbol: string().min(1),
  amount: number().min(0),
  price: number().min(0),
  status: z.enum(['Success', 'Failed']),
});

//convert zod schema to a DTO
export class CreateTradeHistoryDto extends createZodDto(
  CreateTradeHistorySchema,
) {}
