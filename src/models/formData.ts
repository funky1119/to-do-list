export type IFormData = {
  errors: {
    [value: string]: {
      message: string;
    };
  };
  email: string;
  userName: string;
  password: string;
  phoneNumber: string;
  passwordConfirm: string;
  extraError?: string;
};
