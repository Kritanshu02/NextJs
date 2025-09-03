import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Page = () => {
  return (
    <>
    <p>Hello my name is xyz</p>
    <Button asChild={true} variant={"secondary"}>
      <Link href="https://www.youtube.com/watch?v=7TqsIx_UnFI">
      Click Me</Link>
      </Button>
    </>
  )
}

export default Page