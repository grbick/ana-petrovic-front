import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div>LandingPage</div>
      <Outlet />
    </div>
  );
};

export default LandingPage;
