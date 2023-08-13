// schemas/pet.ts
export default {
    name: 'pet',
    type: 'document',
      title: 'Pet',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name:'color',
        title:'Color',
        type:'string'
      },
      {
        name:'age',
        title:'Age',
        type:'number'
      },
      {
        title: 'Manuscript',
        name: 'manuscript',
        type: 'file',
        fields: [
          {
            name: 'description',
            type: 'string',
            title: 'Description'
          },
          {
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: {type: 'pet'}
          }
        ]
      },
      {
        name:'pictureurl',
        title:'PictureUrl',
        type:'string'
      }
    ]
  }