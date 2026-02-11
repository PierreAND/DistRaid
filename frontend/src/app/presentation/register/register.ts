import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUseCase } from '../../application/usecases/users/registerUser-usecase';
import { Classe, Specialisation } from '../../domain/models/users/user.model';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm!: FormGroup;
  classes: Classe[] = [];
  specialisations: Specialisation[] = [];
  filteredSpecialisations: Specialisation[] = [];
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private registerUseCase: RegisterUseCase,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [''],
      email:['' [Validators.required, Validators.email]],
      password: ['' [Validators.required, Validators.minLength(6)]],
      classeId: [null, [Validators.required]],
      specialisationId: [{value: null, disabled: true}, [Validators.required]]
    })
    this.loadClasses()
  }

  loadClasses(): void {
    this.classes =
  }
}
