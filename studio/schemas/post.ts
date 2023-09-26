export default {
    id: 'post',
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Tytuł'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
      },
      {
        name: 'date',
        type: 'date',
        title: 'Data'
      },
      {
        name: 'excerpt',
        type: 'text',
        title: 'Wstęp'
      },
      {
        name: 'content',
        title: 'Treść',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'image',
        type: 'image',
        title: 'Zdjęcie'
      }
    ]
  }