import React, { useState } from "react";
import fixed from "../assets/fixedpt.png";
import dynamic from "../assets/dynamicpt.png";
import DynamicPt from "./DynamicPt";
import FixedPt from "./FixedPt";
import Input from "./Input";
import Button from "./Button";
import MemoryBlock from "./MemoryBlock";
import ProcessBlock from "./ProcessBlock";
import { AnimatePresence } from "framer-motion";
import Learn from "./Learn";

function Visualise() {
  const [Fixed, setFixed] = useState(true);
  const [Dyn, setDyn] = useState(false);
  const [memory, setMemory] = useState([]);
  const [size, setSize] = useState("");
  const [process, setprocess] = useState([]);
  const [psize, setPSize] = useState("");
  const [showFit, setShowFit] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [staticAlgo, setStaticAlgo] = useState("First Fit");
  const [dynamicAlgo, setDynamicAlgo] = useState("First Fit");
  const [statusMsg, setStatusMsg] = useState("");

  const addMemory = () => {
    if (size <= 0) {
      alert("Enter a Valid Size");
    } else if (memory.length === 100) {
      alert("Only 5 Memory Blocks Allowed");
    } else {
      setMemory([...memory, size]);
      setSize("");
    }
  };

  const deleteMemory = () => {
    if (memory.length === 0) {
      alert("Memory Empty");
    } else {
      setMemory([...memory.slice(0, -1)]);
    }
  };

  const addProcess = () => {
    if (psize <= 0) {
      alert("Enter a Valid Size");
    } else if (process.length === 100) {
      alert("Only 10 Processes Allowed");
    } else {
      setprocess([...process, psize]);
      setPSize("");
    }
  };

  const deleteProcess = () => {
    if (process.length === 0) {
      alert("No Process Available");
    } else {
      setprocess([...process.slice(0, -1)]);
    }
  };

  // Example stats calculation (replace with real logic as needed)
  const staticStats = {
    allocated: 0, // TODO: calculate from FixedPt
    waiting: process.length, // TODO: update with real waiting count
    fragmentation: 0, // TODO: calculate from FixedPt
    utilization: 0, // TODO: calculate from FixedPt
  };
  const dynamicStats = {
    allocated: 0, // TODO: calculate from DynamicPt
    waiting: process.length, // TODO: update with real waiting count
    fragmentation: 0, // TODO: calculate from DynamicPt
    utilization: 0, // TODO: calculate from DynamicPt
  };

  return (
    <div className="min-h-[95vh] w-full flex flex-col items-center justify-center p-5">
      <div className="min-h-[10vh] mt-4 text-4xl font-semibold flex items-center gap-6">
        <span className="text-logo-color">Memory Allocation</span> Algorithms
      </div>
      {showLearn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-500"
              onClick={() => setShowLearn(false)}
            >
              &times;
            </button>
            <Learn />
          </div>
        </div>
      )}
      <div className="h-[30vh] w-full flex flex-col items-center justify-center mb-2">
        <div className="w-full flex items-center justify-center gap-8">
          <div
            onClick={() => {
              setFixed(true);
              setDyn(false);
              setMemory([]); // Reset memory for static
            }}
            className={`${
              Fixed
                ? "bg-logo-color"
                : "bg-slate-300 hover:border-4 hover:border-sky-400 hover:bg-sky-200 cursor-pointer"
            } h-[120px] w-[220px] rounded-xl ease-in-out duration-150 gap-3 flex flex-col items-center justify-center shadow-md`}
          >
            <img src={fixed} alt="Static" className="h-[48px] w-[48px] object-contain" />
            <p className="text-2xl font-medium text-black">Static</p>
          </div>
          <div
            onClick={() => {
              setDyn(true);
              setFixed(false);
            }}
            className={`${
              Dyn
                ? "bg-logo-color"
                : "bg-slate-300 hover:border-4 hover:border-sky-400 hover:bg-sky-200 cursor-pointer"
            } h-[120px] w-[220px] rounded-xl ease-in-out duration-150 gap-3 flex flex-col items-center justify-center shadow-md`}
          >
            <img src={dynamic} alt="Dynamic" className="h-[48px] w-[48px] object-contain" />
            <p className="text-2xl font-medium text-black">Dynamic</p>
          </div>
        </div>
      </div>
      {/* Controls and visualization for Static or Dynamic */}
      {Fixed && (
        <>
        <div className="text-3xl flex items-center justify-start font-semibold w-full pl-52 pb-12 text-logo-color">
                Memory
              </div>
        {/* Show fixed size blocks visually */}
        <div className="h-[20vh] flex overflow-auto gap-2 w-[90vw] justify-center items-center mt-10 mb-24">
              {[100, 200, 150, 120].map((size, idx) => (
                <MemoryBlock
                  key={idx}
                  size={size}
                  // No process assignment here, just show the blocks
                />
              ))}
            </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-3xl flex items-center justify-start font-semibold w-full pl-52 pb-12 text-logo-color">
              Process
            </div>
            <div className="flex gap-3">
              <Input
                type="number"
                value={psize}
                heading="Enter Process Size"
                setData={setPSize}
                placeholder="Eg. 100KB"
              />
              <div className="pt-8 flex gap-5">
                <Button
                  name="Add"
                  x="50px"
                  y="40px"
                  func={addProcess}
                  bg="bg-green-500"
                  bghov="bg-green-400"
                />
                <Button
                  name="Delete"
                  x="40px"
                  y="40px"
                  func={deleteProcess}
                  bg="bg-red-500"
                  bghov="bg-red-300"
                />
              </div>
            </div>
            
            <div className="h-[10vh] flex items-center justify-center w-full">
              {process.length > 0
                ? process.map((obj, index) => <ProcessBlock size={obj} key={index} />)
                : "No Process Available"}
            </div>
          </div>
        </>
      )}
      {Dyn && (
        <>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 mb-4">
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="text-3xl flex items-center justify-start font-semibold w-full pl-52 pb-12 text-logo-color">
                Memory
              </div>
              <div className="flex gap-3">
                <Input
                  type="number"
                  value={size}
                  heading="Enter Partition Size"
                  setData={setSize}
                  placeholder="Eg. 100KB"
                />
                <div className="pt-8 flex gap-5">
                  <Button
                    name="Add"
                    x="50px"
                    y="40px"
                    func={addMemory}
                    bg="bg-green-500"
                    bghov="bg-green-400"
                  />
                  <Button
                    name="Delete"
                    x="40px"
                    y="40px"
                    func={deleteMemory}
                    bg="bg-red-500"
                    bghov="bg-red-300"
                  />
                </div>
              </div>
            </div>
            <AnimatePresence>
              <div className="h-[20vh] flex overflow-auto gap-y-1 w-[90vw] justify-center items-center my-10">
                {memory.length > 0
                  ? memory.map((obj, index) => <MemoryBlock size={obj} key={index} />)
                  : "No Memory Available"}
              </div>
            </AnimatePresence>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="text-3xl flex items-center justify-start font-semibold w-full pl-52 pb-12 text-logo-color">
                Process
              </div>
              <div className="flex gap-3">
                <Input
                  type="number"
                  value={psize}
                  heading="Enter Process Size"
                  setData={setPSize}
                  placeholder="Eg. 100KB"
                />
                <div className="pt-8 flex gap-5">
                  <Button
                    name="Add"
                    x="50px"
                    y="40px"
                    func={addProcess}
                    bg="bg-green-500"
                    bghov="bg-green-400"
                  />
                  <Button
                    name="Delete"
                    x="40px"
                    y="40px"
                    func={deleteProcess}
                    bg="bg-red-500"
                    bghov="bg-red-300"
                  />
                </div>
              </div>
            </div>
            <div className="h-[20vh] flex overflow-auto gap-2 w-[90vw] justify-center items-center mt-10 mb-24">
              {process.length > 0
                ? process.map((obj, index) => <ProcessBlock size={obj} key={index} />)
                : "No Process Available"}
            </div>
          </div>
        </>
      )}
      <Button
        name="Craft"
        x="100px"
        y="50px"
        func={() => {
          if ((Dyn && process.length && memory.length) || (Fixed && process.length)) {
            setShowFit(!showFit);
          } else {
            alert(Fixed ? "Process not available!" : "Memory Empty or Process not available!");
          }
        }}
        bg="bg-emerald-500"
        bghov="bg-logo-color"
      />
      <div className="h-full w-full flex justify-center items-center border-t-8 border-t-logo-color mt-10">
        {showFit && Fixed && <FixedPt memory={[100, 200, 150, 120]} process={process} />}
        {showFit && Dyn && <DynamicPt memory={memory} process={process} />}
      </div>
    </div>
  );
}

export default Visualise;
