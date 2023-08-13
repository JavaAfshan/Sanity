/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
   
    {
      name: "category",
      title:"Category",
      type: "array",
      of:[{type:"string"}]
 
    },
    {
        name:"picture",
        title:"Picture",
        type:"string"
    },
    {
        name:"description",
        title:"Distcription",
        type:"string"
    }

  ],
};