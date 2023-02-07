import React, { useEffect } from 'react';
import SignUp from '@/components/SignUp';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

type Props = {};

export default function Login({}: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // 로그인 시 리다이렉트
    if (session && router.pathname.includes('login')) {
      router
        .push({
          pathname: '/',
        })
        .then((r) => console.log('Redirected to /', r));
    }
    return () => {};
  }, [session]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (!session)
    return (
      <>
        <SignUp />
      </>
    );
}
