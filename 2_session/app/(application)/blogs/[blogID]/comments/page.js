export default async function Blog({params}) {
const parmaObj = await params;
const {blogID} = parmaObj;
console.log(parmaObj);
return <h2>All comments on Blog {blogID} page..</h2>    
}