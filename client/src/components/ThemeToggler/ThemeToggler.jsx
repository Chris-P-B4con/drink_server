import React from 'react'

import {CgDarkMode} from "react-icons/cg"

import { Wrapper } from "./ThemeTogglerStyles"

function ThemeToggler(props) {
    return (
        <Wrapper>
            <CgDarkMode onClick={props.themeToggler} />
        </Wrapper>
    )
}

export default ThemeToggler
