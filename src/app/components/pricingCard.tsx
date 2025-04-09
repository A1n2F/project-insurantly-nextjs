import Image from "next/image"

import checkGreen from "../../../public/check-green.svg"
import checkGray from "../../../public/check-gray.svg"

interface PricingCardProps {
    title: string
    description: string
    price: number
}


export function PricingCard({ title, description, price }: PricingCardProps) {
    return (
        <div className="w-[330px] h-[700px] bg-white rounded-xl flex flex-col items-center justify-center space-y-9">
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            
            <p className="text-light-text max-w-[165px] text-center">{description}</p>

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl text-primary font-bold">{price}$</h1>
                <p className="text-[#8EC2F2]">Per Month</p>
            </div>
            
            <button className="px-20 py-4 bg-primary text-white font-semibold rounded-xl 
            hover:bg-hover transition-colors cursor-pointer">
                Try for free
            </button>

            <div className="space-y-4 font-semibold">
                <span className="flex items-center gap-2">
                    <Image src={checkGreen} alt="" />
                    <p>Unlimited product updates</p>
                </span>

                <span className="flex items-center gap-2">
                    <Image src={checkGreen} alt="" />
                    <p>Unlimited product updates</p>
                </span>

                <span className="flex items-center gap-2">
                    <Image src={checkGreen} alt="" />
                    <p>Unlimited product updates</p>
                </span>

                <span className="flex items-center gap-2">
                    <Image src={checkGray} alt="" />
                    <p>1GB  Cloud storage</p>
                </span>

                <span className="flex items-center gap-2">
                    <Image src={checkGray} alt="" />
                    <p>Email and community support</p>
                </span>
            </div>
        </div>
    )
}