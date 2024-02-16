import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const [toggle, setToggle] = useState(false);
  return (
    <HStack>
      <IconButton
        color={"green"}
        icon={toggle ? <MoonIcon /> : <SunIcon />}
        onClick={() => {
          setToggle(!toggle);
          toggleColorMode();
          console.log("asd");
        }}
        aria-label={""}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
