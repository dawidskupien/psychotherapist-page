export default {
    id: 'faq-section',
    name: 'faq',
    type: 'document',
    title: 'FAQ',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Tytuł'
      },
      {
        name: 'qanda',
        type: 'array',
        title: 'Pytania i odpowiedzi',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'question',
                type: 'string',
                title: 'Pytanie'
              },
              {
                name: 'answer',
                type: 'text',
                title: 'Odpowiedź'
              }
            ]
          }
        ]
      }
    ]
  }