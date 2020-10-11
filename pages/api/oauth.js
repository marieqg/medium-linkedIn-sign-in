import { getURLWithQueryParams } from "../../helpers/auth";
import Spinner from "../../assets/icons/Spinner";


const Oauth = async (context) => {
  // Query to exchange our authorization code for an access token 
    const LINKEDIN_URL = getURLWithQueryParams(
        "https://www.linkedin.com/oauth/v2/accessToken",
        {
          grant_type: "authorization_code",
          code: context.query.code,
          redirect_uri: process.env.LINKEDIN_REDIRECT,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET
        }
      );
      let tok;
      let resp = await fetch(LINKEDIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
      if (resp.ok) tok = await resp.json();

        let { access_token, expires_in } = tok;

// Query to exchange our token for user infos
  let auth = "Bearer " + access_token;
  let u = {};
  let usr = await fetch("https://api.linkedin.com/v2/me", {
    method: "GET",
    headers: { Connection: "Keep-Alive", Authorization: auth }
  });
  if (usr.ok) u = await usr.json();


  return (
 <Spinner/>
    );
};

export default Oauth


// Oauth.getInitialProps = async context => {

  

//   let em = {};
//   let ema = await fetch(
//     "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
//     {
//       method: "GET",
//       headers: { Connection: "Keep-Alive", Authorization: auth }
//     }
//   );
//   if (ema.ok) em = await ema.json();
//   const name = u.localizedFirstName;
//   const famillyName = u.localizedLastName;
//   const email = em.elements[0]["handle~"]["emailAddress"];
//   const password = access_token;
//   const tokenExpiry = expires_in;
//   const user = { name, famillyName, email, password, tokenExpiry };

//   return { user, access_token, expires_in };
// };

// export default withApollo(Oauth);
