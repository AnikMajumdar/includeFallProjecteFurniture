import { redirect } from 'next/navigation'
//when users load project at localhost:3000/ we redirect them to the home page
export default function RootPage() {
  redirect('/home')
}