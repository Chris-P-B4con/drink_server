import { useState, useEffect, React } from "react";
import "./DrinkListStyle.css";
import { AiOutlineReload } from "react-icons/ai";
import Table from "../Table/Table";
import Status from "../Status/Status";
import axios from "axios";
function DrinkList() {
  const [resStatus, setResStatus] = useState("");
  const [status, setStatus] = useState({ error: "", success: "" });
  const [drinks, setDrinks] = useState([
    {
      drink_name: "",
      available: "",
      volume: "",
      price: "",
      image: null,
    },
  ]);
  const [newDrink, setNewDrink] = useState([
    {
      drink_name: "",
      available: "",
      volume: "",
      price: "",
      image: null,
    },
  ]);
  const inputMap = {
    drink_name: "text",
    id: "number",
    available: "number",
    volume: "number",
    price: "number",
    image: "file",
  };
  const [spin, setSpin] = useState(false);
  const reloadSpin = () => {
    setSpin(true);
    getDrinks();
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  };
  const getDrinks = () => {
    fetch(`/drinks/get`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 401) {
        response.json().then((status) => {
          setStatus({ success: status.success, error: status.error });
        });
      } else {
        response.json().then((data) => {
          if (JSON.parse(JSON.stringify(data)).length !== 0) {
            setDrinks(JSON.parse(JSON.stringify(data)));
          }
        });
      }
    });
  };

  const updateDrinks = (e) => {
    // Check that he fields contain the correct type of info
    e.preventDefault();
    const formData = new FormData();
    formData.append("drink_name", newDrink.drink_name);
    formData.append("available", newDrink.available);
    formData.append("price", newDrink.price);
    formData.append("volume", newDrink.volume);
    formData.append(
      "file",
      document.querySelector('input[type="file"]').files[0]
    );
    fetch("/drinks/add", {
      method: "POST",
      body: formData,
    })
      // axios.post("/drinks/add", formData, {headers: {'content-type':'multipart/form-data'}}).then((response) => {
      //   console.log(response);
      //   return response.json();
      // })
      .then((res) => {
        setResStatus(res.status);
        return res.json();
      })
      .then((data) => {
        setStatus({ error: data.error, success: data.success });
        console.log(resStatus)
        
        if (resStatus === 200) {
          console.log("True")
          setNewDrink({ drink_name: "", available: "", volume: "", price: "",image: null });
          getDrinks();
        }
        setTimeout(() => {
          setStatus({ error: "", success: "" });
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setSpin(true);
    getDrinks();
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  }, []);

  return (
    <div className="drinks_table_wrapper">
      <div className="reload">
        <AiOutlineReload
          onClick={reloadSpin}
          spin={spin}
          className={spin ? "refresh-start" : ""}
        />
      </div>
      <form
        id="drinkForm"
        onSubmit={updateDrinks}
        enctype="multipart/form-data"
      >
        <Status status={status} />
        <Table
          data={drinks}
          inputMap={inputMap}
          newData={newDrink}
          updateData={updateDrinks}
          setNewData={setNewDrink}
          inputs={true}
        />
      </form>
    </div>
  );
}

export default DrinkList;
