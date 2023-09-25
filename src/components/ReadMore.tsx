import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "./ui/popover"

const ReadMore = () => {
  return (
    <Popover>
        <PopoverTrigger className="font-inter leading-7 text-blue-900/90">Czytaj więcej...</PopoverTrigger>
        <PopoverContent className="fixed top-0 left-0 w-[95vw] md:w-[85vw] lg:w-[52vw] xl:w-[45rem]">
Terapeutycznie wspieram w obszarach takich jak: fobia społeczna, kryzys,
samotność, orientacja i tożsamość psychoseksualna, trudności w relacjach, utrata
sensu życia – w trudzie tych sytuacji ulgą może być zobaczenie ich z zewnątrz i
zrozumienie.
W pracy z Tobą, chciałbym Ci towarzyszyć, będąc nie tylko wsparciem, ale
również stawiając wyzwania, byś mógł/mogła zobaczyć siebie na nowo.
Moje zainteresowania i kompetencje to komunikologia, hipnoterapia, psychologia
pozytywna w edukacji i wychowaniu oraz psychotraumatologia. W pracy
wykorzystuję również technikę Sandplay Therapy oraz arteterapię – oczywiście
wszystko zawsze ustalam z osobą w terapii, ponieważ jest to miejsce, gdzie
spotykamy się wspólnie decydując o tym, co ma się tam wydarzyć.
Jestem terapeutą rekomendowanym przez KPH - ukończyłem szkolenie dot.
specyfiki wsparcia terapeutycznego społeczności LGBTQIA+. Pracuję również
wolontaryjnie - jestem współzałożycielem Stowarzyszenia Ventus Rosa, a także
członkiem Stowarzyszenia Gerontologów Społecznych. Współpracuję z
Uniwersytetem Trzeciego Wieku w Oświęcimiu dla którego prowadzę warsztaty
międzypokoleniowe oraz „Srebrny Krąg” - grupę terapeutyczną dla osób starszych.
Podnoszę swoje kwalifikacje uczestnicząc w szkoleniach i konferencjach oraz
superwizując swoją pracę.
Jestem mężem i ojcem. W wolnym czasie chętnie sięgam po książki i filmy o
tematyce egzystencjalnej – jest to moja pasja, która czeka na mnie ułożona w kilku
rzędach domowej biblioteczki.
.</PopoverContent>
    </Popover>
  )
}

export default ReadMore