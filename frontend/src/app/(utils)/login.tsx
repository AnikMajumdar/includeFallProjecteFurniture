const Login = async (username: string, password: string) => {
    
    const user = {
        username: username,
        password: password
    }
    
    const url = `http://localhost:3001/log-in`;

    try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    
    // Store JWT token in localStorage
    if (result.token) {
      localStorage.setItem("authToken", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
    }
    
    return result;
  } catch (err) {
    console.log(err);
  }
}

export default Login