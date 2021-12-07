interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  gender: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    age: number;
    date: string;
  };
}

export interface UserList extends Array<User> {}
