import { Button } from "@/components/ui/button"
const Page = () => {
  return (
    <>
    <p>Hello my name is xyz</p>
    <Button asChild={true} variant={"secondary"}>
      <a href="https://www.youtube.com/watch?v=7TqsIx_UnFI">
      Click Me</a>
      </Button>
    </>
  )
}

export default Page