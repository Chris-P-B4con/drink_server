// const updateDrinks = () => {
//   // Check that he fields contain the correct type of info

//   fetch(`${process.env.REACT_APP_IP_BACKEND}:5000/api/drinks/add`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newDrink),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       setStatus({ error: data.error, success: data.success });
//       setTimeout(() => setStatus({ error: "", succes: "" }), 5000);
//     });
//   getDrinks();
//   setNewDrink({ drink_name: "", available: "", volume: "", price: "" });
// };

exports.bookDrink = async (drink) => {
  try {
    const booking = await fetch("/drinks/book", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ drink }),
    });
    if (booking.status === 403)
      return {
        success: "",
        error: "You are not properly signed in.",
      };
    else if (booking.status !== 200 && booking.status !== 201)
      return { error: "Error while booking drinks!", success: "" };
    else return { error: "", success: "Prost. Wurde gebucht." };
  } catch (err) {
    console.log("Booking Error");
  }
};

exports.getDrinks = async (setStatus, setDrinks) => {
  fetch("/drinks/get", {
    method: "GET",
  })
    .then((res) => {
      if (res.status === 403)
        setStatus({ success: "", error: "You are not properly signed in." });
      else if (res.status !== 200 && res.status !== 201)
        setStatus({ success: "", error: "Error while fetching drinks!" });
      return res.json();
    })
    .then((data) => {
      if (JSON.parse(JSON.stringify(data)).length !== 0) {
        setDrinks(JSON.parse(JSON.stringify(data)));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addDrink = (catchError, formData) => {
  // Check that he fields contain the correct type of info

  fetch("/drinks/add", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (res.status === 403)
        throw new Error("You are not properly signed in.");
      else if (res.status !== 200 && res.status !== 201)
        throw new Error("Error while fetching drinks!");
      return res.json();
    })
    .then((data) => {
      catchError(data.error, data.success);
    })
    .catch((err) => {
      console.log(err);
    });
};
