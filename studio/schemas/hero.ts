export default {
    id: 'hero-section',
    name: 'hero',
    type: 'document',
    title: 'Sekcja główna',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Tytuł',
        validation: (Rule: { max: (arg: number) => { error: (arg: string) => void}}) => Rule.max(25).error('Maksymalna długość opisu to 25 znaków'),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Opis',
        validation: (Rule: { max: (arg: number) => { error: (arg: string) => void}}) => Rule.max(270).error('Maksymalna długość opisu to 270 znaków'),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Zdjęcie',
      },
      {
        name: 'alt',
        type: 'string',
        title: 'Opis zdjęcia',
        description: 'Krótki opis zdjęcia dla osób niewidomych',
        validation: (Rule: { required: () => void; }) => Rule.required(),
      }
    ]
  }