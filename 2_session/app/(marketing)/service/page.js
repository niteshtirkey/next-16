import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Service page..</h1>
      <Link href="/service/webDevlopment">Web Development</Link> {" "}
      <Link href="/service//seo">SEO</Link>
    </div>
  )
}

export default page
