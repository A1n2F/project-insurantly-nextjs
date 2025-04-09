import { GridContainer } from "./GridContainer";

export function Header() {
    return (
        <section className="w-full h-[670px] bg-[url(/background.jpg)] bg-no-repeat bg-cover">
            <GridContainer>
                <div className="flex items-center justify-between gap-80 py-5">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Insurantly</h1>
                    </div>

                    <div className="flex gap-10 text-white">
                        <a href="#" className="hover:underline underline-offset-2 transition-all">Home</a>
                        <a href="#" className="hover:underline underline-offset-2 transition-all">Product</a>
                        <a href="#" className="hover:underline underline-offset-2 transition-all">Pricing</a>
                        <a href="#" className="hover:underline underline-offset-2 transition-all">Contact</a>
                    </div>

                    <div className="flex gap-10">
                        <button className="text-white font-bold hover:text-hover transition-colors cursor-pointer">
                            login
                        </button>
                        
                        <button className="px-5 py-3 bg-primary text-white font-semibold rounded-xl
                        hover:bg-hover transition-colors cursor-pointer">
                            Become a member
                        </button>
                    </div>
                </div>

                <div className="mt-32 space-y-10 text-white">
                    <h1 className="max-w-[600px] text-6xl font-bold">We Ensure A Best Insurance Service</h1>
                    <p className="max-w-[370px] text-xl">We know how large objects will act, but things on a small scale.</p>
                    
                    <div className="flex items-center gap-3.5">
                        <button className="px-9 py-4 bg-primary text-white font-bold rounded-full
                        hover:bg-hover transition-colors cursor-pointer">
                            Get Quote Now
                        </button>

                        <button className="px-9 py-4 border text-white font-bold border-white rounded-full
                        hover:border-hover hover:text-hover transition-colors cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}