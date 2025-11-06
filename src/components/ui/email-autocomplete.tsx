import React from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const emailDomains = [
  '@gmail.com',
  '@yahoo.com'
];

interface EmailAutoCompleteProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function EmailAutocomplete({ value, onChange, disabled }: EmailAutoCompleteProps) {
  const [open, setOpen] = React.useState(false);
  const inputValue = value || '';
  const atIndex = inputValue.lastIndexOf('@');
  const domain = atIndex >= 0 ? inputValue.slice(atIndex) : '';
  const username = atIndex >= 0 ? inputValue.slice(0, atIndex) : inputValue;

  const filteredDomains = emailDomains.filter(d => 
    d.toLowerCase().includes(domain.toLowerCase())
  );

  const handleSelect = (selectedDomain: string) => {
    onChange(username + selectedDomain);
    setOpen(false);
  };

  React.useEffect(() => {
    if (domain) {
      setOpen(true);
    }
  }, [domain]);

  return (
    <Popover open={open && !disabled && domain.length > 0} onOpenChange={setOpen}>
      <PopoverTrigger>
        <span className="sr-only">Show email suggestions</span>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandList>
            <CommandGroup>
              {filteredDomains.map((d) => (
                <CommandItem
                  key={d}
                  onSelect={() => handleSelect(d)}
                >
                  {username + d}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}