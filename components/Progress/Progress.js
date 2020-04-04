import React from "react";
import ProgressCenter from "./ProgressCenter.js";
import ProgressWeightLog from "./ProgressWeightLog.js";
import ProgressGraph from './ProgressGraph.js';


const Progress = () => {
  
  return (
    <section className="flex items-center justify-center">
      <div className="w-1/3">
        <ProgressGraph />
      </div>
      <div className="w-1/3">
        <ProgressCenter />
      </div>
      <div className="w-1/3">
        <ProgressWeightLog />
      </div>
    </section>
  );
};

export default Progress;