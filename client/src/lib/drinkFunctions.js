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

exports.getDrinks = async () => {
  try {
    const res = await fetch("/drinks/get", {
      method: "GET",
    });

    if (res.status === 403)
      return {
        success: "",
        error: "You are not properly signed in.",
      };
    else if (res.status !== 200 && res.status !== 201)
      return {
        success: "",
        error: "Error while fetching drinks!",
      };
    if (JSON.parse(JSON.stringify(res)).length !== 0) {
      return res.json();
    }
  } catch (err) {
    console.log(err);
  }
};

exports.updateDrink = async (formData) => {
  // Check that he fields contain the correct type of info

  try {
    const response = await fetch("/drinks/add", {
      method: "POST",
      body: formData,
    });
    if (response.status === 403)
      return { error: "You are not properly signed in.", success: "" };
    else if (response.status !== 200 && response.status !== 201)
      return { error: "Error while updating drinks!", success: "" };
    return { error: response.error, success: response.success };
  } catch (err) {
    console.log(err);
  }
};
