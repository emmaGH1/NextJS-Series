import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
       <p className="mt-12 mb-12 text-center bg-no-repeat text-4xxl dark:text-white">
         Hello and Welcome 👋&nbsp;
         <span className="whitespace-nowrap">
           I'm <span className="font-bold">Emma</span>
         </span>
       </p>
       <Posts />
    </main>
  )
}
