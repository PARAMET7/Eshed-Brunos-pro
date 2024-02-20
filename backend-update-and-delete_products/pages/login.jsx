import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function Component() {
      const { data: session } = useSession();
      console.log("session=>",session);

      if (session) {
        return (
          <div>
            <p>Wellcome, {session.user.email}</p>
            <img src={session.user.image} alt="" style={{ borderRadius: '50px' }} />
            <button onClick={()=> signOut()}>Sign out</button>
          </div>
        );
      } else {
        return (
          <div>
            <p>You are not signed in.</p>
            <button onClick={()=> signIn()}>Sign in</button>
          </div>
        );
      }
}
