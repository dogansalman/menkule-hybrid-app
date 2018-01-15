import { AbstractControl } from '@angular/forms';

export function Conditional(condition: any) {
  return (control: AbstractControl) => {
    if (control.value === condition) {
      return { validUrl: true };
    }
    return null;
  }
}
