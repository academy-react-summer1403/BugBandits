import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Accordion from "../../Accordion";

const DrawerPlacement = () => {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <IconButton
          variant="text"
          onClick={openDrawerRight}
          className="cursor-pointer block md:hidden"
        >
          <FiFilter />
        </IconButton>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-iranSans">
            اعمال فیلتر
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <AiOutlineClose className="w-6 h-6" />
          </IconButton>
        </div>
        {/* <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div> */}
        <Accordion />

      </Drawer>
    </React.Fragment>
  );
};

export { DrawerPlacement };
