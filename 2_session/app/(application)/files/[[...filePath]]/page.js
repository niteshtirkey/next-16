export const metadata = {
  title: {
    absolute: "My Files",
  },
};

export default async function File({params}) {
    const {filePath} = await params;
    console.log(filePath)
  return (
    <div>
      <h1>File / {filePath?.join("/") || ""} </h1>
    </div>
  )
}
