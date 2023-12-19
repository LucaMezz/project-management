"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";

import { cn } from "@/lib/utils";

import TasksChart from "../charts/tasks";

export interface HealthProps extends React.HTMLAttributes<HTMLElement> {}

const Tasks = ({ className, ...props }: HealthProps) => {
  return (
    <div className={cn(className, "gap-4 bg-background p-4")} {...props}>
      <h1 className="mb-2 text-lg font-semibold">Tasks</h1>
      <TasksChart />
    </div>
  );
};

export default Tasks;
