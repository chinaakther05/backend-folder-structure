type User = {
  name: string;
  email: string;
  password: string;
};

const users: User[] = [];

// Register
const register = (payload: User) => {
  const exists = users.find((u) => u.email === payload.email);

  if (exists) {
    throw new Error("User already exists");
  }

  users.push(payload);

  return {
    message: "User registered successfully",
    user: payload,
  };
};


// Login
const login = (email: string, password: string) => {
  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  return {
    message: "Login successful",
    user,
  };
};

// change password 
const changePassword = (
  email: string,
  oldPassword: string,
  newPassword: string
) => {
  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== oldPassword) {
    throw new Error("Old password is incorrect");
  }

  user.password = newPassword;

  return {
    message: "Password changed successfully",
    user,
  };
};

// forget password
const forgetPassword = (email: string, newPassword: string) => {
  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error("User not found");
  }

  user.password = newPassword;

  return {
    message: "Password reset successful",
    user,
  };
};



export const authService = {
  register,
  login,
  changePassword,
  forgetPassword,
};