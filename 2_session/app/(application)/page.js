"use client"

import Link from "next/link";
import { use } from "react";

export default function Home() {
  console.log("next js running..")
  return (
    <div>

      <h1>Home Page.</h1>
      <Link href="/about">about</Link>  <br/>
      <Link href="/blogs">blogs</Link>   <br/>
      <Link href="/service">service</Link>  <br/>
      <Link href="/files">files</Link>  <br/>
     </div>
  );
}
