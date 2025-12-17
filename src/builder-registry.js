"use client";
import { builder, Builder } from "@builder.io/react";
import { FaCode, FaMobileAlt, FaLaptop, FaTools } from 'react-icons/fa'; 
import Loader from "./components/Loader";
import Page from "./app/[...builder]/page";
import ScratchCard from "./components/ScratchCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);


Builder.registerComponent(Page, {
  name: "Page",
});

Builder.registerComponent(ScratchCard, {
  name: 'Scratch Card',
  inputs: [
    {
      name: 'apiUrl',
      type: 'string',
      defaultValue: '/api/scratch-card',
      helperText: 'API endpoint for scratch card data',
    },
  ],
});

Builder.registerComponent(Builder, {
  name: "Builder",
});



