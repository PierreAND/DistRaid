import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginUseCase } from '../../application/usecases/users/loginUser-usecase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup;
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private loginUseCase: LoginUseCase,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      passeword: ['']
    })
  }
  onSubmit(): void {
    if (this.loginForm.invalid) return;
    this.isLoading = true;
    this.errorMessage = '';
    const formValue = this.loginForm.getRawValue();

    this.loginUseCase.execute({
      email: formValue.email,
      password: formValue.password
    })
    .subscribe({
      next: (res) => {
        localStorage.setItem('access_token', res.access_token);
        this.router.navigate(['/home'])
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || "Email ou mot de passe incorect"
      }
    })
  }
}
