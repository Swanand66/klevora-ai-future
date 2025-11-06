import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { countries } from '@/data/countries';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function CountrySelect({ value, onChange, disabled }: CountrySelectProps) {
  return (
    <Select
      value={value}
      onValueChange={onChange}
      disabled={disabled}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent className="max-h-[300px]">
        {countries.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            <span className="inline-flex items-center gap-2">
              <span>{country.flag}</span>
              <span>{country.code}</span>
              <span className="text-muted-foreground text-sm">{country.country}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}