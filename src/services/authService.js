export async function login(authDetails) {
  try {
    const requstOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authDetails),
    };
    const response = await fetch(
      `${import.meta.env.VITE_HOST}/login`,
      requstOptions,
    );
    const data = await response.json();
    if (data.accessToken) {
      sessionStorage.setItem('token', JSON.stringify(data.accessToken));
      sessionStorage.setItem('userid', JSON.stringify(data.user.id));
    }
    return data;
  } catch (error) {
    console.error('Login error:', error.message);
    throw error; //eslint-disable-line
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
      `${import.meta.env.VITE_HOST}/register`,
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
    throw error; //eslint-disable-line
  }
}

export function logout() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userid');
}
