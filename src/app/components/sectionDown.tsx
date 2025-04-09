import Image from "next/image";
import { GridContainer } from "./GridContainer";

import bookSvg from "../../../public/book.svg"
import flagsSvg from "../../../public/flags.svg"
import usersSvg from "../../../public/users.svg"

export function SectionDown() {
    return (
        <section className="w-full bg-dark-background">
            <GridContainer>
                <div className="flex items-center justify-between py-24">
                    <div className="flex flex-col items-center justify-center">
                        <Image src={bookSvg} alt="" />

                        <h1 className="text-white font-semibold mt-8">Peace of Mind</h1>

                        <p className="max-w-[234px] text-white text-center mt-3">So it really behaves like neither. Now we have given up.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Image src={flagsSvg} alt="" />

                        <h1 className="text-white font-semibold mt-8">Set For Life</h1>

                        <p className="max-w-[234px] text-white text-center mt-3">They were used to create the machines that launched </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Image src={usersSvg} alt="" />

                        <h1 className="text-white font-semibold mt-8">100% Satisfaction</h1>

                        <p className="max-w-[234px] text-white text-center mt-3">So it really behaves like neither. Now we have given up.</p>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}