// import React from 'react';
// import { useSession, singOut, getSession } from 'next-auth/react';

// const account = () => {
//   const {data: session, status} = useSession({required: true});

//   if (status === 'authenticated' ) {
//     <div>
//       <p>Wellcome {session.user.name}</p>
//       <button onClick={()=> singOut()}>Sigh out</button>
//     </div>
//   } else {
//     return (
//       <div>account
//         <p>You are not signed in</p>
//       </div>
//     );
//   }
// };

// export default account;

// export const getServerSideProps = async (context)=>  {
//   const session = await getSession(context);
//   if(!session){
//     return {
//       redirect: {
//         destination: '/login',
//       }
//     }
//   }
//   return {
//     props: {session},
//   };
// };

// Change this. Just m=to make the deployment work
export default function Account(params) {
  return <h1>Accoutn page</h1>

}
