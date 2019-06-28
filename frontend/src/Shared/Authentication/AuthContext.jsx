import React from "react";
export default React.createContext({
    token: null,
    patientId: null,
    login: (token, patientId, tokenExpiration) => {},
    logout: () => {}
});
