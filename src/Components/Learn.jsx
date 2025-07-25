import React from "react";
import learnlogo from "../assets/learnlogo.png";

function Learn() {
  return (
    <div className="min-h-[95vh] w-full flex flex-col items-center justify-center p-5">
      <div className="min-h-[10vh] mt-4 text-4xl font-semibold">
        <span className="text-logo-color">Learn</span> Algorithms
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-8 gap-10">
        <div className="md:w-2/3 w-full flex flex-col items-start justify-center bg-white bg-opacity-10 rounded-xl p-8 shadow-lg">
          <p className="text-2xl font-semibold mb-4">
            <span className="text-logo-color">Memory Allocation</span> Algorithms
          </p>
          <p className="mb-4">
            Memory allocation algorithms are essential in managing computer memory effectively, particularly in operating systems. They dictate how memory is allocated to processes or programs running on a system. Two common strategies for memory allocation are fixed partitioning and dynamic partitioning.
          </p>
          <p className="text-2xl font-semibold mb-2 mt-4">
            <span className="text-logo-color">Fixed</span> Partition
          </p>
          <p className="mb-4">
            In fixed partitioning, the available memory is divided into fixed-sized partitions before the execution of programs. Each partition can accommodate one process. When a process arrives, the system allocates a partition that is large enough to hold the process. If no such partition is available, the process waits in a queue until one becomes available.
          </p>
          <p className="text-2xl font-semibold mb-2 mt-4">
            <span className="text-logo-color">Dynamic</span> Partition
          </p>
          <p className="mb-4">
            In dynamic partitioning, memory is divided into variable-sized partitions. When a process arrives, it requests memory dynamically from the available pool. The system allocates memory dynamically to each process, and the unused memory is returned to the pool when a process terminates.
          </p>
          <p className="mb-4">
            Dynamic partitioning doesn't suffer from internal fragmentation like fixed partitioning, but it can suffer from external fragmentation, where there are enough total free memory spaces, but they are not contiguous, making it difficult to allocate larger processes.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <span className="font-semibold text-logo-color">First Fit:</span> It allocates the first available memory block that is large enough to accommodate the process.
            </li>
            <li>
              <span className="font-semibold text-logo-color">Next Fit:</span> It allocates the next available memory block that is large enough to accommodate the process starting from the last placed block.
            </li>
            <li>
              <span className="font-semibold text-logo-color">Worst Fit:</span> It allocates the largest available memory block, leaving behind the largest leftover fragment, which can be used later.
            </li>
            <li>
              <span className="font-semibold text-logo-color">Best Fit:</span> It allocates the smallest available memory block that is large enough to accommodate the process, minimizing wasted memory.
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <img
            src={learnlogo}
            alt="Learn"
            className="h-[50vh] max-w-full object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Learn;
