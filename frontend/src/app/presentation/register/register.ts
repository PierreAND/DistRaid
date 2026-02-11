import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUseCase } from '../../application/usecases/users/registerUser-usecase';
import { GetAllClassUseCase } from '../../application/usecases/classes/getAllClasses.usecase';
import { Classe, Specialisation } from '../../domain/models/users/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
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
    private getAllClasseUseCase: GetAllClassUseCase,
    private router: Router,
  ) {}

 ngOnInit(): void {
  this.registerForm = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],          
    password: ['', [Validators.required, Validators.minLength(6)]], 
    classeId: [null, [Validators.required]],
    specialisationId: [{ value: null, disabled: true }, [Validators.required]],
  });
  this.loadClasses();
}

loadClasses(): void {
  this.getAllClasseUseCase.execute().subscribe({
    next: (classes) => {
      this.classes = classes;
      this.specialisations = classes.flatMap((c) => c.specialisation);
    },
    error: (err) => {
      console.error('Erreur chargement classes:', err);
    },
  });
}

onClasseChange(): void {
  const classeId = this.registerForm.get('classeId')?.value;
  const specControl = this.registerForm.get('specialisationId');

  if (classeId) {
    this.filteredSpecialisations = this.specialisations.filter(
      (s) => s.classeId === +classeId
    );
    specControl?.enable();
  } else {
    this.filteredSpecialisations = [];
    specControl?.setValue(null);
    specControl?.disable();
  }
}

onSubmit(): void {
  if (this.registerForm.invalid) return;

  this.isLoading = true;
  this.errorMessage = '';
  const formValue = this.registerForm.getRawValue();

  this.registerUseCase
    .execute({
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
      classeId: +formValue.classeId,
      specialisationId: +formValue.specialisationId,
    })
    .subscribe({
      next: (res) => {
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Erreur lors de l'inscription";
      },
    });
}
}