"use client";
import { Button } from "@/components/ui/button"
import {
  Form,

} from "@/components/ui/form"

import createRoomSchema from "@/lib/createRoomSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import CustomInput from "./CustomInput";
import { createRoom } from "@/actions";
import { useRouter } from "next/navigation";
const CreateRoomForm = ()=>{
    const router = useRouter();
    const form = useForm<z.infer<typeof createRoomSchema>>({
      resolver: zodResolver(createRoomSchema),
      defaultValues: {
        name: "",
        description: "",
        language: "",
        githubRepo: "",
      },
    });
    
    const onSubmit = async(values:z.infer<typeof createRoomSchema>)=>{
      await createRoom(values);
      router.push('/');
    }
    return (
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomInput
            control={form.control}
            name="name"
            label="Name"
            placeholder="Enter the name of the room"
          />
          <CustomInput
            control={form.control}
            name="description"
            label="Description"
            placeholder="Enter a description of the room"
          />
          <CustomInput
            control={form.control}
            name="language"
            label="Programming Language"
            placeholder="What Programming Language is the project using"
          />
          <CustomInput
            control={form.control}
            name="githubRepo"
            label="Git Hub Repo"
            placeholder="Please enter the GitHubRepo Link"
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
}
export default CreateRoomForm;