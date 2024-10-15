import axios from "axios";
import React, { useEffect } from "react";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    useEffect(() => {
      axios.get("/api/users/auth").then((reponse) => {
        console.log(reponse);
      });
    }, []);
  }

  return AuthenticationCheck;
}
