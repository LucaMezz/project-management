import { NextPage } from "next";

import Health from "@/components/app/dashboard/health";
import Tasks from "@/components/app/dashboard/tasks";

type Props = {};

const App: NextPage<Props> = ({}: Props) => {
  return (
    <>
      <section id="dashboard">
        <div className="grid grid-cols-3">
          <Health />
          <Tasks />
        </div>
      </section>
    </>
  );
};

export default App;
