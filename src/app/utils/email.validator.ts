import { ValidatorFn } from "@angular/forms";

export function emailValidator(domain: string[]): ValidatorFn {
    const domainStr = domain.join('|')
    const regExp = new RegExp(`[A-Za-z0-9]{6,}@gmail\.(${domainStr})`)
    return (control) => {
        const isInvalid = control.value === '' || regExp.test(control.value)
        return isInvalid ? null : { emailValidator: true }
    }
}