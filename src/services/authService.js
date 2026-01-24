export async function login(authDetails) {
  try {
    const requstOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authDetails),
    };
    const response = await fetch('http://localhost:8000/login', requstOptions);
    const data = await response.json();
    if (data.accessToken) {
      sessionStorage.setItem('token', JSON.stringify(data.accessToken));
      sessionStorage.setItem('userid', JSON.stringify(data.user.id));
    }
    return data;
  } catch (error) {
    console.error('Login error:', error.message);
    throw error;
  }
}

export async function register(authDetails) {
  try {
    const requstOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authDetails),
    };
    const response = await fetch(
      'http://localhost:8000/register',
      requstOptions,
    );
    const data = await response.json();
    if (data.accessToken) {
      sessionStorage.setItem('token', JSON.stringify(data.accessToken));
      sessionStorage.setItem('userid', JSON.stringify(data.user.id));
    }
    return data;
  } catch (error) {
    console.error('Registration error:', error.message);
    throw error;
  }
}

export function logout() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userid');
}
