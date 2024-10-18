"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/image-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1664286074240-d7059e004dff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705493655920-20c572928501?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664286022007-9d2eb1003165?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-[30vh] md:h-[100vh]" images={images}>
      <motion.div
        initial={{
          opacity: 100,
          y: -80,
        }}
        animate={{
          opacity: 100,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Welcome to J. S. Industries : A Genuine Leather Belts Manufacturer,  <br /> Supplier and Exporter in Kanpur, India.
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
