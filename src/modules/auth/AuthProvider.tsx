import { Auth0Provider } from "@auth0/auth0-react";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = observer(
  ({ children }) => {
    return (
      <Auth0Provider
        domain="dev-qqyvb75vpmldh0sk.us.auth0.com"
        clientId="hi8TiGnuSRSSnDk5MIaFbwFFMexqhijH"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "http://localhost:5173",
        }}
      >
        {children}
      </Auth0Provider>
    );
  }
);
