export default async function Coment({params}) {
const parmaObj = await params;
const {blogID, commentID} = parmaObj;
console.log(parmaObj);
return <h2>All comments {commentID} on Blog {blogID} page..</h2>    
}