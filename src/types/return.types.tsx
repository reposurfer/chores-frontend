export interface SuccessfulLoginResponse {
    token: string;
}

export interface ErrorResponse {
    errors: {
      [key: string]: string[];
    };
    status: number;
  }
  
  