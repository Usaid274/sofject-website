import Heading from "@/app/components/heading";
 
export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-10.5rem)] flex-col items-center justify-center">
      <section className="px-4 py-24 w-full">
        <Heading headingText="The page you're looking for does not exist">
          <span className="text-primary">Error 404</span>
        </Heading>
      </section>
    </main>
  )
}
