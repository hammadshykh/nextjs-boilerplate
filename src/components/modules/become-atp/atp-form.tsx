"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
 Form,
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { formSchema } from "@/lib/schemas";
import { formControlcustom } from "@/styles/form";
import { Checkbox } from "@/components/ui/checkbox";

const AtpForm: React.FC = () => {
 // ...

 // 1. Define your form.
 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
   first_name: "",
   last_name: "",
   email: "",
   message: "",
   organization_name: "",
   phone: "",
   website: "",
   zip_code: "",
   approved: false,
   confirm: false,
  },
 });

 // 2. Define a submit handler.
 function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
 }

 return (
  <div className="w-full">
   <div className="md:flex justify-center">
    <div className="w-full md:w-[750px]">
     <div className="py-6 text-center text-black font-semibold">
      <p>
       Fill out the application form below to apply for Approved Training
       Partner (ATP).
      </p>
     </div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
       <div className="flex flex-col md:flex-row justify-center md:justify-between md:space-x-10">
        <div className="w-full space-y-3 md:space-y-4">
         <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
           <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
             <Input
              className={formControlcustom}
              placeholder="shadcn"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
         <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
           <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
             <Input
              className={formControlcustom}
              placeholder="shadcn"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>
        <div className="w-full md:mt-0 mt-3 space-y-3 md:space-y-4">
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
           <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
             <Input
              className={formControlcustom}
              placeholder="shadcn"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
           <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
             <Input
              className={formControlcustom}
              placeholder="shadcn"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>
       </div>
       <div>
        <FormField
         control={form.control}
         name="organization_name"
         render={({ field }) => (
          <FormItem>
           <FormLabel>Organization</FormLabel>
           <FormControl>
            <Input
             className={formControlcustom}
             placeholder="shadcn"
             {...field}
            />
           </FormControl>
           <FormMessage />
          </FormItem>
         )}
        />
       </div>
       <div className="md:flex justify-center md:justify-between md:space-x-10">
        <div className="w-full space-y-3 md:space-y-4">
         <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
           <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
             <Input
              className={formControlcustom}
              placeholder="shadcn"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>
        <div className="w-full md:mt-0 mt-3 space-y-3 md:space-y-4">
         <FormField
          control={form.control}
          name="zip_code"
          render={({ field }) => (
           <FormItem>
            <FormLabel>Zip Code</FormLabel>
            <FormControl>
             <Input
              className={formControlcustom}
              placeholder="shadcn"
              {...field}
             />
            </FormControl>
            <FormMessage />
           </FormItem>
          )}
         />
        </div>
       </div>
       <div className="py-4">
        <FormField
         control={form.control}
         name="approved"
         render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
           <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
           </FormControl>
           <div className="space-y-1 leading-none">
            <FormLabel>
             I am applying for SDC USA approved training provider on behalf of
             my organization
            </FormLabel>
           </div>
          </FormItem>
         )}
        />
       </div>
       <div>
        <FormField
         control={form.control}
         name="confirm"
         render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
           <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
           </FormControl>
           <div className="space-y-1 leading-none">
            <FormLabel>
             I confirm that the details provided above are accurate to the best
             of my knowledge. Any misinterpretation or submission of false
             documents may result in disqualification
            </FormLabel>
           </div>
          </FormItem>
         )}
        />
       </div>
       <div className="flex justify-center items-center py-4">
        <Button type="submit">Submit</Button>
       </div>
      </form>
     </Form>
    </div>
   </div>
  </div>
 );
};

export default AtpForm;
