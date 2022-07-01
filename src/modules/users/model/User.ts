import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    // eslint-disable-next-line prettier/prettier
    if(!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
