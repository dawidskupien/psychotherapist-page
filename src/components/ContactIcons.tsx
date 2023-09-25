import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "./ui/popover"

const ContactIcons = () => {
  return (
      <div className="mt-6 flex flex-wrap gap-[1rem]">
            <Popover>
                <PopoverTrigger className="flex cursor-pointer justify-center gap-2">
                    <svg className="h-6 w-6 text-[#365466]" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <p className=" ">Nr. telefonu</p>
                </PopoverTrigger>
                <PopoverContent>
                    <p>+ 349 381 283</p>
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger className="flex cursor-pointer justify-center gap-2">
                    <svg className="h-6 w-6 text-[#365466]" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <p className=" ">Email</p>
                </PopoverTrigger>
                <PopoverContent>
                   <p>dariusz.lowczynowski@gmail.com</p> 
                </PopoverContent>
            </Popover>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100012832724399" className="flex cursor-pointer justify-center gap-2">
                    <svg className="h-[1.6rem] w-[1.6rem] -translate-y-0.5 text-[#365466]" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <p>Facebook</p>
                </a>
        </div>
  )
}

export default ContactIcons