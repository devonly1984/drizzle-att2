"use client"

import { Control, FieldPath } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { z } from "zod"

import createRoomSchema from "@/lib/createRoomSchema"
interface CustomInputProps {
  control: Control<z.infer<typeof createRoomSchema>>;
  name: FieldPath<z.infer<typeof createRoomSchema>>;
  label: string;
  placeholder: string;
}
const CustomInput = ({control,name,label,placeholder}:CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={label} {...field} />
          </FormControl>
          <FormDescription>{placeholder}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomInput