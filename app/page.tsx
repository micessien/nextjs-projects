import FormPost from "./Form"
import Lists from "./components/Lists"

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data: {id: number, title: string, content: string}[] = await getPosts()
  
  return (
    <main className="py-4 px-48">
      <FormPost/>

      <h1 className="mt-7 text-lg">Posts list</h1>
      <Lists posts={data} />
    </main>
  )
}
