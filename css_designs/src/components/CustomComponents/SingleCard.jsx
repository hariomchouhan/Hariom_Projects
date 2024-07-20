import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import CodeButtons from "./CodeButtons";



export default function SingleCard({ preview, react, tailwindcss, html, css }) {
  
  const view = preview
  return (
    <Card className="w-[330px] mx-auto p-4 h-auto">
      <CardContent className="flex flex-col justify-center items-center h-auto">
        <div dangerouslySetInnerHTML={{ __html: view }}></div>

      </CardContent>

    </Card>
  )
}