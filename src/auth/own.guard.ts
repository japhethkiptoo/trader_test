import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

/**
 * OwnGuard - checks if the user is the owner of the resource
 * using the user_id in the request and the user_id in the params
 */

@Injectable()
export class OwnGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user.user_id;
    const id = request.params.user_id;

    if (user != id)
      throw new ForbiddenException('You are not the owner of this resource');

    return true;
  }
}
