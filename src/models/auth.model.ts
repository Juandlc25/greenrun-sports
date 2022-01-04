export interface IAuth {
  user: any;
  isAuthenticating: boolean;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
  passwordResetEmail: (email: string) => void;
  confirmPassword: (code: any, password: string) => void;
}
