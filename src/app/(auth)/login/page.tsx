import { NextPage } from "next";

import LoginCard from "@/components/layout/auth/login/login-card";
import SiteLogo from "@/components/layout/site-logo";

type Props = {};

const Login: NextPage<Props> = ({}: Props) => {
  return (
    <div className="flex p-4 md:p-0">
      <div className="hidden h-screen w-1/3 bg-muted p-24 md:inline-block">
        <SiteLogo />
      </div>
      <LoginCard className="m-auto h-full w-full max-w-[28rem] px-4 md:w-2/3" />
    </div>
  );
};

export default Login;
