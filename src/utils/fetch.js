export const signup = async (username, email, password) => {
  const response = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    code: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("data in fetch signup", data);
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to log in");
    }

    return await response.json();
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  const response = await fetch("http://localhost:5001/users/getAllUsers");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const users = await response.json();
  return users;
};
