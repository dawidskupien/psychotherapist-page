export default {
    id: 'contact-section',
    name: 'contact',
    type: 'document',
    title: 'Kontakt',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Tytuł'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Opis',
        validation: (Rule: { max: (arg: number) => { error: (arg: string) => void}}) => Rule.max(160).error('Maksymalna długość opisu to 160 znaków'),
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Telefon'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      }
    ]
  }