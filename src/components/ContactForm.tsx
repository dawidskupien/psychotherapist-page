import * as z from 'zod'
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from './ui/form.tsx'
import { Input } from './ui/input.tsx'
import { Button } from './ui/button.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "./ui/use-toast"
import { type BaseSyntheticEvent } from 'react'
import { Toaster } from './ui/toaster.tsx'
import { Textarea } from './ui/textarea.tsx'
import emailjs from '@emailjs/browser';

const formSchema = z.object({
    name: z.string()
    .min(3, {
        message: "Nazwa musi zawierać przynajmniej 3 znaki",
    })
    .max(30, {
        message: "Nazwa może zawierać maksymalnie 30 znaków",
    })
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/.test(value), {
        message:'Nazwa nie może zawierać cyfr i znaków specjalnych'
    }),
    email: z.string()
    .email({
      message: "Nieprawidłowy adres email"
    }),
    message: z.string()
    .min(10, {
      message: "Wiadomość musi zawierać przynajmniej 10 znaków",
    })
    .max(2000, {
        message: "Wiadomość może zawierać maksymalnie 2000 znaków",
    })
    .refine((val) => val.trim() !== "", {
        message: "Wiadomość nie może składać się tylko z białych znaków",
    }),
})

const ContactForm = () => {
  const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    function onSubmit(e: BaseSyntheticEvent<object>) {
        emailjs.sendForm(
          import.meta.env.PUBLIC_EMAIL_SERVICE_ID,
          import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID,
          e.target,
          import.meta.env.PUBLIC_EMAIL_USER_ID,
        )
        .then((result) => {
          if(result.text === 'OK'){
            toast({
              title: "Wiadomość została wysłana",
            })
          }
        }, (error) => {
          toast({
            title: "Wiadomość nie została wysłana",
            description: error.text,
            variant: "destructive",
          })
        });
    };


  return (
    <>
      <Toaster />
      <Form {...form}>
        <form onSubmit={form.handleSubmit((_,e) => e ? onSubmit(e) : null)} className="space-y-6  mt-6 xl:mt-0 xl:-translate-y-[1rem] w-full flex flex-col ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=''>Nazwa</FormLabel>
                <FormControl>
                  <Input className=' border-[#365466]' placeholder="nazwa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=''>Email</FormLabel>
                <FormControl>
                  <Input className=' border-[#365466]' placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=''>Wiadomość</FormLabel>
                <FormControl>
                  <Textarea className='min-h-[17rem] border-[#365466]' placeholder="wiadomość" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-[#365466] self-end" type="submit">Wyślij wiadomość</Button>
        </form>
      </Form>
    </>
  )
}

export default ContactForm