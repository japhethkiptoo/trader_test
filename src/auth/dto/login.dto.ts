import { createZodDto } from 'nestjs-zod';
import { string, z } from 'zod';

const LoginSchema = z.object({
  username: string().min(1),
  password: string().min(1),
});

export class LoginDTO extends createZodDto(LoginSchema) {}

export type LoginDTOType = z.infer<typeof LoginSchema>;
