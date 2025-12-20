"use client";
import { builder, Builder } from "@builder.io/react";
import LeaderBoardForm from "./components/LeaderBoardForm";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(LeaderBoardForm, {
  name: "LeaderBoardForm",
});
