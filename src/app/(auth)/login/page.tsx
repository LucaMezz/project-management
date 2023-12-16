import { NextPage } from "next";

import LoginCard from "@/components/login/login-card";

type Props = {};

const Login: NextPage<Props> = ({}: Props) => {
  return (
    <div className="flex">
      <div className="h-screen w-1/3 bg-muted"></div>
      <div className="flex h-screen w-2/3 items-center justify-center">
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
