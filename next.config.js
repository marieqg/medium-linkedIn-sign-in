if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
  }
  
  module.exports = {
    env: {
      LINKEDIN_STATE: process.env.LINKEDIN_STATE,
      LINKEDIN_SCOPE: process.env.LINKEDIN_SCOPE,
      LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID,
      LINKEDIN_REDIRECT: process.env.LINKEDIN_REDIRECT,
      LINKEDIN_REDIRECT_CONNECT: process.env.LINKEDIN_REDIRECT_CONNECT,
      LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,
    }
  };
  