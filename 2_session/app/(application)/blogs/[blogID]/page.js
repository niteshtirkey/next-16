import { notFound } from "next/navigation";

export async function generateMetadata ({params}){
  const {blogID} = await params;
  return {
    title: `Blog ${blogID}`
  }
}

const page = async({params}) => {
    const {blogID} = await params;

    if(!/^\d+$/.test(blogID)){
      notFound()
    }
  return (
    <div>
      <h1>Blog1 {blogID}</h1>
    </div>
  )
}

export default page
