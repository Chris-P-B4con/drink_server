
export const updateStatus = (setStatus, message, time=4000) => {
    setStatus(message)
    setTimeout(() => {
        setStatus({error:"", success:""})
      }, time);
}