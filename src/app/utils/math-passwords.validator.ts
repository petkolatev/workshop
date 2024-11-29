import {  ValidatorFn } from "@angular/forms";

export function mathPasswordsValidator(
    passwordControlName: string, 
    rePasswordControlName: string
): ValidatorFn {
    return (control) => {
        const passwordFormCotrol = control.get(passwordControlName)
        const rePasswordFormControl = control.get(rePasswordControlName)
        const passwordsAreMatching = passwordFormCotrol?.value === rePasswordFormControl?.value
        return passwordsAreMatching ? null : { mathPasswordsValidator: true }
    }
}