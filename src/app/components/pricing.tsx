import { PricingCard } from "./pricingCard";

export function Pricing() {
    return (
        <section className="w-full bg-dark-background py-28">
            <div className="flex flex-col items-center justify-center mb-24">
                <h1 className="text-4xl font-bold text-white">Pricing</h1>
                <p className="max-w-[470px] text-center text-white mt-3">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>


            <div className="relative">
            <div className="flex items-center justify-center gap-9">
               <PricingCard
                    title="Free"
                    description="Organize across all apps by hand"
                    price={0.00}
                />

                <PricingCard
                    title="Silver"
                    description="Organize across all apps by hand"
                    price={9.99}
                />

                <PricingCard
                    title="Gold"
                    description="Organize across all apps by hand"
                    price={19.99}
                />
            </div>

            <div className="bg-[#E77C40] rounded-full w-20 h-20 flex items-center justify-center absolute -top-10 right-200">
                <h1 className="text-2xl text-white font-bold ">New</h1>
            </div>
            </div>
    </section>
    )
}
