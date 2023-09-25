import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs.tsx";

const MapTab = () => {
  return (
    <div className="mt-6">
        <Tabs defaultValue="addres1" className="xl:max-w-[32rem] w-full flex flex-col">
              <TabsList className="self-start">
                  <TabsTrigger value="addres1">Gabinet nr 1</TabsTrigger>
                  <TabsTrigger value="addres2">Gabinet nr 2</TabsTrigger>
              </TabsList>
            <TabsContent value="addres1">
              <iframe title="Google map of first office" className="w-full h-[17rem]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20468.41691780176!2d18.97485579949172!3d50.113389770248034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716b806c7c02759%3A0xfc5281624f3e9af2!2sPracownia%20Rozwoju%20WZRASTAM!5e0!3m2!1spl!2spl!4v1694643948660!5m2!1spl!2spl" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </TabsContent>
            <TabsContent value="addres2">
              <iframe title="Google map of second office" className="w-full h-[17rem] " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.637941188314!2d19.196888669686512!3d50.038494359574926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716bfd50c4c61a5%3A0x838b6bc8314a1b3e!2sWyzwolenia%2017%2F3%2C%2032-600%20O%C5%9Bwi%C4%99cim!5e0!3m2!1spl!2spl!4v1695491003782!5m2!1spl!2spl"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default MapTab