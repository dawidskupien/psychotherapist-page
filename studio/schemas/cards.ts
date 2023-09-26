export default {
    id: 'cards',
    name: 'cards',
    type: 'document',
    title: 'Oferta',
    fields: [
      {
        name: 'icon',
        type: 'image',
        title: 'Ikona'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Tytuł'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Opis'
      },
      {
        name: 'price',
        title: 'Cena',
        type: 'array',
        of: [{type: 'string'}],
      },
    ],
  }