import type { FC } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface QandA {
  question: string
  answer: string
}
interface QuestionsProps {
  qanda: QandA[]
}

const Questions: FC<QuestionsProps> = ({qanda}) => {
  return (
      <Accordion type="single" collapsible style={{width: "clamp(1rem, 100%, 768px)"}} className="mt-6 bg-white">
        {qanda.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-start font-semibold'>{item.question}</AccordionTrigger>
            <AccordionContent className=" leading-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  )
}

export default Questions