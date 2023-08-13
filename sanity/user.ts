// schemas/pet.ts
export default {
    name: 'user',
    type: 'document',
      title: 'User',
    fields: [
      {
        name: 'username',
        type: 'string',
        title: 'Username'
      },
      {
        name:'email',
        title:'Email',
        type:'string'
      },
      {
        name:'password',
        title:'Password',
        type:'string'
      },
      {
        name:'picture',
        title:'Picture',
        type:'string'
      }
    ]
  }