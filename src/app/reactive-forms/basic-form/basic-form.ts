import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: false,
  templateUrl: './basic-form.html',
  styleUrl: './basic-form.scss'
})
export class BasicForm {
  basicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.basicForm = this.fb.group({
      fields: this.fb.array([this.createFieldGroup()])
    });
  }

  get fields(): FormArray {
    return this.basicForm.get('fields') as FormArray;
  }

  createFieldGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  addField(): void {
    console.log('Adding new field', this.fields);
    this.fields.push(this.createFieldGroup());
  }

  removeField(index: number): void {
    if (this.fields.length > 1) {
      this.fields.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.basicForm.valid) {
      console.log('✅ Form Submitted:', this.basicForm.value);
    } else {
      console.log('🚫 Form is invalid');
    }
  }
}