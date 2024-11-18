import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { UserService } from "../user/user.service";

export const AuthGuard: CanActivateChildFn = () => {
    const userService = inject(UserService)
    const router = inject(Router)

    if (userService.isLogged) {
        return true
    }
    router.navigate(['/home'])
    return false
}