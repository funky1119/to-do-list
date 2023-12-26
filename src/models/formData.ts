export type IFormData = {
  errors: {
    [value: string]: {
      message: string;
    };
  };
  todo: string;
};
