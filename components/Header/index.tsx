import React from 'react';
import { Nav, Logo, LoginContainer, Login } from "@/components/Header/styles";
import { useSession, signIn } from "next-auth/react";
import SignedInHeader from "@/components/Header/SignedInHeader";

type Props = {}

export default function Header({}: Props){
    const { data: session, status } = useSession();


    const renderHeader = () => {

        if (session) return <SignedInHeader session={session} />;
        return (
            <LoginContainer>
                <Login onClick={()=>signIn()}>Login</Login>
            </LoginContainer>
        )
    }

    return (
        <Nav>
            <Logo
                src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
                alt="Disney Logo"
            />
            {renderHeader()}
        </Nav>
    )
}