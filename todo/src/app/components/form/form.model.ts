import { FormControl, FormGroup, Validators } from "@angular/forms";

export class TodoFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }
  getValidationMessages() {
    let messages: string[] = [];
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${this.label}`);
            break;
          case "minlength":
            messages.push(`A ${this.label} must be at least
    ${this.errors["minlength"].requiredLength}
   characters`);
            break;
          case "maxlength":
            messages.push(`A ${this.label} must be no more than
    ${this.errors["maxlength"].requiredLength}
   characters`);
            break;
          case "pattern":
            messages.push(`The ${this.label} contains
   illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
}
export class TodoFormGroup extends FormGroup {
  constructor() {
    super({
      date: new TodoFormControl("Date", "date", "", Validators.required),
      description: new TodoFormControl(
        "Description",
        "description",
        "",
        Validators.compose([Validators.required, Validators.maxLength(10)])
      ),
    });
  }

  get todoControls(): TodoFormControl[] {
    return Object.keys(this.controls).map(
      (k) => this.controls[k] as TodoFormControl
    );
  }
  getValidationMessages(name: string): string[] {
    return (this.controls[name] as TodoFormControl).getValidationMessages();
  }
  getFormValidationMessages(): string[] {
    let messages: string[] = [];
    Object.values(this.controls).forEach((c) =>
      messages.push(...(c as TodoFormControl).getValidationMessages())
    );
    return messages;
  }
}
