import React from 'react';
import { Nav, Logo, LoginContainer, Login } from "@/components/header/styles";

type Props = {}

export default function Header({}: Props){
    return (
        <Nav>
            <Logo
                src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
                alt="Disney Logo"
            />
        </Nav>
    )
}