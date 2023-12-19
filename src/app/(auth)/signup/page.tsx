import { NextPage } from "next";

import SignupCard from "@/components/auth/signup/signup-card";
import SiteLogo from "@/components/layout/site-logo";

type Props = {};

const Signup: NextPage<Props> = ({}: Props) => {
  return (
    <div className="flex p-4 lg:p-0">
      <div className="hidden h-screen w-1/3 bg-muted p-24 md:inline-block">
        <SiteLogo />
      </div>
      <SignupCard className="m-auto h-full w-full max-w-[28rem] px-4 md:w-2/3" />
    </div>
  );
};

export default Signup;
