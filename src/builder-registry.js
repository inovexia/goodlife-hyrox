"use client";
import { builder, Builder } from "@builder.io/react";
import { FaCode, FaMobileAlt, FaLaptop, FaTools } from 'react-icons/fa'; 
import Loader from "./components/Loader";
import Page from "./app/[...builder]/page";
import ScratchCard from "./components/ScratchCard";
import TopMaleUsers from "./components/TopMaleUsers";
import TopFemaleUsers from './components/TopFemaleUsers';
import LeaderBoardForm from './components/LeaderBoardForm';

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

Builder.registerComponent(TopMaleUsers, {
  name: 'Top Male Users',
  inputs: [
    {
      name: 'apiUrl',
      type: 'string',
      defaultValue: 'https://dummyjson.com/users',
    }
  ],
});

Builder.registerComponent(TopFemaleUsers, {
  name: 'Top Female Users',
  inputs: [
    {
      name: 'apiUrl',
      type: 'string',
      defaultValue: 'https://dummyjson.com/users',
    },
  ],
});
Builder.registerComponent(LeaderBoardForm, {
  name: 'LeaderBoardForm',
});



