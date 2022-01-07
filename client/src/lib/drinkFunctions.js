import {useState, useEffect} from "react"
import { responseHandler } from "./helpFunctions";

export const bookDrink = async (drink) => {
  try {
    const booking = await fetch("/drinks/book", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ drink }),
    });

    const response = await responseHandler(booking);
    return response;
  } catch (err) {
    console.log("Booking Error");
  }
};

export const getUserDrinks = async (page = null, paid = false) => {
  try {
    const userDrinks = await fetch(`/users/userdrinks/${page}?paid=${paid}`, {
      method: "GET",
    });

    const response = await responseHandler(userDrinks);
    if (response.error !== "") {
      return response;
    } else return userDrinks;
  } catch (err) {
    console.log("Error while getting user drinks.");
  }
};

export const getDrinks = async () => {
  try {
    const res = await fetch("/drinks/getAll", {
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

export const getAllUserDrinks = async () => {
  try {
    const res = await fetch("/users/alluserdrinks", {
      method: "GET",
    });

    const response = await responseHandler(res);
    if (response.error !== "") return response;
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const addDrink = async (formData) => {
  // Check that he fields contain the correct type of info
  console.log(formData);
  try {
    const addedDrink = await fetch("/drinks/add", {
      method: "POST",
      body: formData,
    });
    const response = await responseHandler(addedDrink);
    return response;
  } catch (err) {
    console.log("Error while adding drink");
  }
};

export const updateDrink = async (formData) => {
  try {
    const updatedDrink = await fetch("/drinks/update", {
      method: "POST",
      body: formData,
    });
    const response = await responseHandler(updatedDrink);
    return response;
  } catch (err) {
    console.log("Error while updating drink.");
  }
};
