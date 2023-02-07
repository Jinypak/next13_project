import { signIn } from 'next-auth/react';
import React from 'react';
import { Container, EmailInput, SignUpLink } from './styles';

type Props = {};

export default function Index({}: Props) {
  return (
    <Container>
      <EmailInput placeholder='input your email' />
      <SignUpLink onClick={() => signIn()}>Continue</SignUpLink>
    </Container>
  );
}
