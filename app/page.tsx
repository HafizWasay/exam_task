"use client"
import { deleteLorem } from "@/actions/deleteLorem";
import { getLorems } from "@/actions/getLorem";
import { MyForm } from "@/components/myform";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCallback, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const page = () => {
  const [lorems, setLorems] = useState<any>();

  useEffect(() => {
    getLorems().then((data: any) => {
      setLorems(data);
      console.log(data);
    });
  }, [lorems]);

  const handleDelete = useCallback((id: string) => {
    deleteLorem(id);
  }, []);

  return (
    <div className='flex border border-black rounded-lg bg-[#FFF078] items-center m-5 gap-y-20 p-10 flex-col'>
      <div className='flex h-[100px] gap-x-[100px]'>
        <div className='w-[1/3] bg-[#36BA98] p-16 font-bold flex flex-col items-center justify-center border border-black rounded-lg'>lorem ipsum <br /><span className='text-2xl'>03</span></div>
        <div className='w-[1/3] bg-[#667BC6] p-16 font-bold flex flex-col items-center justify-center border border-black rounded-lg'>lorem ipsum <br /><span className='text-2xl'>11</span></div>
        <div className='w-[1/3] bg-[#DA7297] p-16 font-bold flex flex-col items-center justify-center border border-black rounded-lg'>lorem ipsum <br /><span className='text-2xl'>52</span></div>        
      </div>
      
<div className="mt-8">
        <MyForm />
      </div>
      <div className="flex flex-col my-6 gap-y-4">
        {lorems?.map((lorem: any, index: number) => {
          return (
            <Card key={index} className="flex flex-col justify-center p-4 ">
              <CardContent className="text-4xl font-medium">
                {lorem.name}
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <Button size={"lg"} className="bg-red-500 w-[150px] rounded-lg">
                  Click Me
                </Button>
                <Button
                  variant={"ghost"}
                  className="w-fit"
                  onClick={() => handleDelete(lorem.id)}
                >
                  <span>
                    <RiDeleteBin6Line size={25} />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  )
}

export default page