import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../lib/button";

export default {
  title: "Button",
  component: Button
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯 Something new
    </span>
  </Button>
);
