import React from "react";
import { IoIosSearch } from "react-icons/io";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export interface SearchMenuProps extends React.HTMLAttributes<HTMLElement> {}

const SearchMenu = ({ className, ...props }: SearchMenuProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className={cn(className, "")} {...props}>
      <Button
        variant={"outline"}
        className="w-64 items-center justify-between text-muted-foreground"
        onClick={toggleOpen}
      >
        Search
        <IoIosSearch size={18} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchMenu;
