const updateDrinks = () => {
  // Check that he fields contain the correct type of info

  fetch(`${process.env.REACT_APP_IP_BACKEND}:5000/api/drinks/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDrink),
  })
    .then((response) => response.json())
    .then((data) => {
      setStatus({ error: data.error, success: data.success });
      setTimeout(() => setStatus({ error: "", succes: "" }), 5000);
    });
  getDrinks();
  setNewDrink({ drink_name: "", available: "", volume: "", price: "" });
};
