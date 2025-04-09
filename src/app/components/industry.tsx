import Image from "next/image";
import { GridContainer } from "./GridContainer";

import starSvg from "../../../public/star.svg"

import woman from "../../../public/circle-box.png"
import men from "../../../public/circle-box1.png"

export function Industry() {
    return (
        <section className="w-full bg-light-background py-28">
            <GridContainer>
                <div className="flex flex-col items-center justify-center mb-28">
                    <h1 className="text-4xl font-bold text-white">Industry</h1>
                    <p className="max-w-[470px] text-center text-white mt-3">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                <div className="flex items-center justify-center gap-40">
                    <div className="w-[450px] h-[330px] bg-white px-10 py-8 relative">
                        <div>
                            <h1 className="text-2xl font-semibold text-dark-text">Regina Miles</h1>
                            <p className="text-light-text">Designer</p>
                        </div>

                        <div className="flex items-center gap-1 my-4">
                            <Image src={starSvg} alt="" />
                            <Image src={starSvg} alt="" />
                            <Image src={starSvg} alt="" />
                            <Image src={starSvg} alt="" />
                            <Image src={starSvg} alt="" />
                        </div>

                        <div>
                            <p className="text-light-text font-semibold">
                                This proved to be impossible using the traditional concepts of space and time. 
                                Einstein developed a new view of time first and then space. This proved to be impossible
                                using the traditional concepts of space and time. Einstein developed a new view of 
                                time first and then space.
                            </p>
                        </div>

                        <Image src={woman} alt="" className="absolute top-6 -left-12" />
                    </div>

                    <div className="w-[450px] h-[330px] bg-white px-10 py-8 relative">
                        <div>
                            <h1 className="text-2xl font-semibold text-dark-text">John Doe</h1>
                            <p className="text-light-text">Designer</p>
                        </div>

                        <div className="flex items-center gap-1 my-4">
                            <Image src={starSvg} alt="" />
                            <Image src={starSvg} alt="" />
                            <Image src={starSvg} alt="" />
                            <Image src={starSvg} alt="" />
                            <Image src={starSvg} alt="" />
                        </div>

                        <div>
                            <p className="text-light-text font-semibold">
                                This proved to be impossible using the traditional concepts of space and time. 
                                Einstein developed a new view of time first and then space. This proved to be impossible
                                using the traditional concepts of space and time. Einstein developed a new view of 
                                time first and then space.
                            </p>
                        </div>

                        <Image src={men} alt="" className="absolute top-6 -left-12" />
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}