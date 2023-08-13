import { type SchemaTypeDefinition } from 'sanity'
import pet from './pet'
import product from './product'
import user from './user'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet,user,product],
}
