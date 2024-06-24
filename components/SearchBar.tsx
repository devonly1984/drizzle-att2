"use client"

import { searchBarSchema } from "@/lib/searchBarSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl,  FormField, FormItem, FormMessage } from "./ui/form";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";
const SearchBar = () => {
    const router = useRouter();
    const query = useSearchParams();
    const form = useForm<z.infer<typeof searchBarSchema>>({
      resolver: zodResolver(searchBarSchema),
      defaultValues: {
        search: query.get("search") ?? "",
      },
    });
    const onSubmit = async (values: z.infer<typeof searchBarSchema>) => {
        if (values.search) {
        router.push(`/?search?q=${values.search}`);
        } else {
            router.push("/");
        }
        

    };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Filter rooms by keywords"
                  className="w-[400px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <SearchIcon className="mr-2" />
          Search
        </Button>
        {query.get("search") && (
          <Button
            variant="link"
            onClick={() => {
              form.setValue("search", "");
              router.push("/");
            }}
          >
            Clear Filters
          </Button>
        )}
      </form>
    </Form>
  );
};

export default SearchBar;