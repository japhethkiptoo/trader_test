import { Injectable } from '@nestjs/common';
import { AuthGuard as iAuthGuard } from '@nestjs/passport';

/**
 * AuthGuard - captures Bearer-token
 * if no token - throws UnauthorizedException
 * if token is invalid - throws UnauthorizedException
 */

@Injectable()
export class AuthGuard extends iAuthGuard('jwt') {}
