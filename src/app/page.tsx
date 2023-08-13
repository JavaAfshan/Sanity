import { createClient } from 'next-sanity'
import Image from 'next/image';
const client = createClient({
  projectId: "5ihvo2tq",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});
export default async function Home() {
  const pets = await client.fetch(`*[_type == 'pet'] {
    age,
    name,
    color,
    "manuscriptURL": manuscript.asset->url
  }`);
  console.log(pets);
  const user = await client.fetch(`*[_type == "user"]`);
  
  const product = await client.fetch(`*[_type == "product"]`);
  
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
    
    {
      pets?.map((pet:any)=>(
        <div key={pet._id}>
         <div className="item bg-red-100 rounded-md ">
         <img src={pet.manuscriptURL} className="rounded-t-md w-full h-[500px] overflow-hidden"   alt="" />
                       <div className="px-2 py-4">
                        <h2 className="font-extrabold text-2xl" >{pet.name}</h2>
                        <p>Age: {pet.age}</p>
                        <p className="font-bold">
                            Color: {pet.color}
                        </p>
                    </div>
                </div>

        </div>
      ))
    }
      {/* {
        pets?.map((pet:any)=>(
      <div key={pet._id}>
        Name:{pet.name}
        Age:{pet.age}
        Color:{pet.color}
        Type:{pet._type}
      </div>
      ))
    } */}



    {
      product?.map((product:any)=>(
        <div key={product._id}>
         <div className="item bg-red-100 rounded-md ">
                    <img src={product.picture} className="rounded-t-md w-full h-[500px] overflow-hidden"   alt="" />
                    <div className="px-2 py-4">
                        <h2 className="font-extrabold text-2xl" >{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p className="font-bold">
                            Category: {product.category}
                        </p>
                        <p>
                          Description:{product.description}
                        </p>
                    </div>
                </div>

        </div>
      ))
    }


    </div>
  );
}
