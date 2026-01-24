function getSessionData() {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const userid = JSON.parse(sessionStorage.getItem('userid'));
  return { token, userid };
}

export async function getUser() {
  try {
    const browserData = getSessionData();
    const response = await fetch(
      `${import.meta.env.VITE_HOST}/600/users/${browserData.userid}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${browserData.token}`,
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get user error:', error.message);
    throw error; //eslint-disable-line
  }
}

export async function createOrder(cartList, total, user) {
  try {
    const browserData = getSessionData();
    const order = {
      userid: user.id,
      cartList: cartList,
      total: total,
      quantity: cartList.length,
      user: {
        name: user.name,
        email: user.email,
        id: user.id,
      },
    };
    const response = await fetch(`${import.meta.env.VITE_HOST}/660/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${browserData.token}`,
      },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Create order error:', error.message);
    throw error; //eslint-disable-line
  }
}

export async function getUserOrders() {
  try {
    const browserData = getSessionData();
    const response = await fetch(
      `${import.meta.env.VITE_HOST}/660/orders?user.id=${browserData.userid}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${browserData.token}`,
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get user orders error:', error.message);
    throw error; //eslint-disable-line
  }
}
