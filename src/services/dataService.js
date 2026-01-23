function getSessionData() {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const userid = JSON.parse(sessionStorage.getItem('userid'));
  return { token, userid };
}

export async function getUser() {
  const browserData = getSessionData();
  const response = await fetch(
    `http://localhost:8000/600/users/${browserData.userid}`,
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
}

export async function createOrder(cartList, total, user) {
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
  const response = await fetch('http://localhost:8000/660/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
}

export async function getUserOrders() {
  const browserData = getSessionData();
  const response = await fetch(
    `http://localhost:8000/660/orders?user.id=${browserData.userid}`,
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
}
