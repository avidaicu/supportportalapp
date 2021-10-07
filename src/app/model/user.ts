export class User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  logInDateDisplay: Date;
  joinDate: Date;
  profileImageUrl: string;
  active: boolean;
  notLocked: boolean;
  role: string;
  authorities: [];

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.logInDateDisplay = '';
    this.joinDate = '';
    this.profileImageUrl = '';
    this.active = false;
    this.notLocked = false;
    this.role = '';
    this.authorities = [];
  }
}
