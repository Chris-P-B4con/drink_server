import React from 'react'
import { useCookies, CookiesProvider } from "react-cookie";

import './HomeStyle.css'

function Home () {
    const [cookies, setCookie, removeCookie] = useCookies(["session"])
    function Logout() {
        removeCookie("session", {
          path: '/'
        })
        console.log("removed cookie")
        window.location.reload()
      }
    return (
        <div>
            <button onClick={Logout} > Logout </button>
        </div>
    )
}

export default Home
