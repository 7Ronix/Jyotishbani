export class Employee {
  id?: number = 0;
  firstname: string = '';
  lastname: string = '';
  birthdate: string = '';
  gender: string = '';
  education: string = '';
  company: string = '';
  jobExperience: number = 0;
  salary: number = 0;
  profile: string = '';
}

export class UserModel {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
  timeOfBirth: string = '';
  email: string = '';
  gender: string = '';
  mobile: any;
}

export class AstrologerModel {
  id: number = 0;
  // title: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  phone: string = '';
  categories: string = '';
  gender: string = '';
}


export interface Payment {
  getPayments(): Payment[];
  getPayment(): Payment[];
  id: number;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}