export default {
    id: 'about-section',
    name: 'about',
    type: 'document',
    title: 'O mnie',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Zdjęcie'
      },
      {
        name: 'alt',
        type: 'string',
        title: 'Opis zdjęcia',
        description: 'Krótki opis zdjęcia dla osób niewidomych',
        validation: (Rule: { required: () => void; }) => Rule.required(),
      },
      {
        name: 'title',
        type: 'string',
        title: 'Tytuł'
      },
      {
        name: 'description',
        title: 'Opis',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'education',
        title: 'Edukacja',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'experience',
        title: 'Doświadczenie',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'courses',
        title: 'Kursy i szkolenia',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'awards',
        title: 'Nagrody i wyróżnienia',
        type: 'array',
        of: [{type: 'block'}],
      }
    ]
  }