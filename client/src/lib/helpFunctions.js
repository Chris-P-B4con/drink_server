exports.updateStatus = (setStatus, message, time = 4000) => {
  setStatus(message);
  setTimeout(() => {
    setStatus({ error: "", success: "" });
  }, time);
};

exports.responseHandler = async (response) => {
  let message = { error: "", succes: "" };

  if (response.status === 500) {
    message.error = "Internal server error occured";
  } else if (response.status === 422) {
    message.error = "The data you entered was incorrect";
  } else if (response.status === 404) {
    message.error = "The site you tried to reach is invalid.";
  } else if (response.status === 403) {
    message.error = "You are not authorized for this data.";
  } else if (response.status === 201) {
    message.success = "Successfully created.";
  } else if (response.status === 200) {
    message.success = "Well that worked.";
  }
  const serverMessage = await response.json();
  if (serverMessage) {
    return serverMessage;
  }
  return message;
};
