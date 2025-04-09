import { GridContainer } from "./GridContainer";

import { FooterComponent } from "./footerComponent";

export function Footer() {
    return (
        <section>
            <GridContainer>
                <div className="flex items-center justify-between max-w-[1300px] py-10">
                    <div>
                        <h1 className="text-2xl font-bold mb-3">
                            Consulting Agency For Your Business
                        </h1>

                        <p className="text-light-text">
                            the quick fox jumps over the lazy dog
                        </p>
                    </div>

                    <div>
                        <button className="px-5 py-3 bg-primary text-white font-semibold rounded-xl
                        hover:bg-hover transition-colors cursor-pointer">
                                Contact Us
                        </button>
                    </div>
                </div>
            </GridContainer>
                <div className="flex items-center justify-center mt-10 bg-dark-text py-10">
                    <div className="max-w-[1050px] flex items-center justify-center">
                        <FooterComponent />
                    </div>
                </div>
        </section>
    )
}