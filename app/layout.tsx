import './globals.css'
import photot from "@/public/hello_world.gif"
import type { Metadata } from 'next'
import {Russo_One} from 'next/font/google'
const russo_One = Russo_One({
  weight:'400',
  subsets:["latin"],

})
export const metadata: Metadata = {
  title: 'Dhanush Prabakaran',
  description: 'As a full-stack web developer , I am well-versed in a wide range of programming languages and technologies. Currently, I am pursuing a B.Tech in Computer Science and Business Systems at KIT- Kalaignarkarunanidhi Institute of Technology, where I have gained a solid foundation in software engineering principles and best practices. I am passionate about collaborating with industry professionals to further develop my skills and knowledge, and I am excited about the opportunities that lie ahead.',
  openGraph: {
    title: "Dhanush Prabakaran",
    url: `${photot}`,
    description: "As a full-stack web developer , I am well-versed in a wide range of programming languages and technologies. Currently, I am pursuing a B.Tech in Computer Science and Business Systems at KIT- Kalaignarkarunanidhi Institute of Technology, where I have gained a solid foundation in software engineering principles and best practices. I am passionate about collaborating with industry professionals to further develop my skills and knowledge, and I am excited about the opportunities that lie ahead.",
    type: "website",
    images: [
      {
        url: "https://www.example.com/path-to-your-image.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={russo_One.className}>{children}</body>
    </html>
  )
}
