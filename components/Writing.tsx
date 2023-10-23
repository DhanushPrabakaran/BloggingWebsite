"use client";
import React from "react";
import { motion, useDragControls } from "framer-motion";
const Writing = () => {
  const controls = useDragControls();
  return (
    <div className="hero min-h-screen bg-primary overflow-hidden">
      <div className="hero-content text-center flex flex-col">
        <div className="text-4xl font-bold from-purple-600 via-primary-focus to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Writings
        </div>
        <div
        className=" flex flex-wrap ">
          <motion.div drag className="mockup-code bg-primary text-primary-content  m-2 border-2 border-primary-focus">
            <pre>
              <code>without prefix</code>
            </pre>
          </motion.div>
          <motion.div drag className="mockup-code bg-primary text-primary-content  m-2 border-2 border-primary-focus">
            <pre>
              <code>without prefix</code>
            </pre>
          </motion.div>
          <motion.div drag className="mockup-code bg-primary text-primary-content  m-2 border-2 border-primary-focus">
            <pre>
              <code>without prefix</code>
            </pre>
          </motion.div>
          <motion.div drag className="mockup-code bg-primary text-primary-content  m-2 border-2 border-primary-focus">
            <pre>
              <code>without prefix</code>
            </pre>
          </motion.div>
          <motion.div drag className="mockup-code bg-primary text-primary-content  m-2 border-2 border-primary-focus">
            <pre>
              <code>without prefix</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Writing;
