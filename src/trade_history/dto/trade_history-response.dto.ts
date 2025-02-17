import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const TradeHistoryResponseSchema = z.object({
  id: z.number(),
  trade_type: z.string(),
  symbol: z.string(),
  amount: z.number(),
  price: z.number(),
  status: z.enum(['Success', 'Failed']),
  timestamp: z.string().date(),
});

export class TradeHistoryResponseDTO extends createZodDto(
  TradeHistoryResponseSchema,
) {}

//paginated response

const TradeHistoryPaginatedResponseSchema = z.object({
  data: z.array(TradeHistoryResponseSchema),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  total_pages: z.number(),
});

export class TradeHistoryPaginatedResponseDTO extends createZodDto(
  TradeHistoryPaginatedResponseSchema,
) {}
