import { getURLWithQueryParams } from "../../helpers/auth";
import Spinner from "../../assets/icons/Spinner";

const Oauth = async (context) => {
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


  return (
      <Spinner />
  );
};

export default Oauth

