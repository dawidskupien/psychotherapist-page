import { Tabs, TabsTrigger, TabsList, TabsContent } from './ui/tabs'
import { type FC, type ReactNode } from 'react'

interface AboutTabProps {
    education: ReactNode
    experience: ReactNode
    courses: ReactNode
    awards: ReactNode
}

const AboutTab: FC<AboutTabProps> = (props) => {
  return (
        <Tabs defaultValue="W" className="lg:min-h-[32rem]">
            <TabsList className="my-6  flex w-fit h-fit flex-wrap justify-start">
                <TabsTrigger value="W">Wykształcenie</TabsTrigger>
                <TabsTrigger value="D">Doświadczenie</TabsTrigger>
                <TabsTrigger value="K">Kursy i szkolenia</TabsTrigger>  
                <TabsTrigger value="N">Nagrody i wyróznienia</TabsTrigger>  
            </TabsList>
            <TabsContent value="W">
                {props.education}
            </TabsContent>
            <TabsContent value="D">
                {props.experience}
            </TabsContent>
            <TabsContent  value="K">
                {props.courses}
            </TabsContent>
            <TabsContent value="N">
                {props.awards}
            </TabsContent>
        </Tabs>
  )
}

export default AboutTab