"use client";
import { useParams } from 'next/navigation'

const Page = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>{params.productName}</div>
  )
};

export default Page;
