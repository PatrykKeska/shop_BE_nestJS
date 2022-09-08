import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PasswordProtectGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const goodPassword = this.reflector.get<string>(
      'goodProtectPassword',
      context.getHandler(),
    );
    const request = context.switchToHttp().getRequest();
    return request.headers['x-password'] === goodPassword;
  }
}
