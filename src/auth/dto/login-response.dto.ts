import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const LoginResponseSchema = z.object({
  access_token: z.string(),
  message: z.string(),
  success: z.boolean(),
});

export class LoginResponseDTO extends createZodDto(LoginResponseSchema) {}
