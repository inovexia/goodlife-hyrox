"use client";
import { builder, Builder } from "@builder.io/react";
import BuilderSlider from "./components/BuilderSlider";
import MegaMenuList from "./components/MegaMenuList";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(MegaMenuList, {
  name: "MegaMenuList",
});

Builder.registerComponent(BuilderSlider, {
  name: "BuilderSlider",
});
