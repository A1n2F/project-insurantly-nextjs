import { GridContainer } from "./GridContainer";

export function Contact() {
    return (
        <section className="w-full h-[670px] bg-[url(/backgroundContact.jpg)] bg-no-repeat bg-cover">
            <GridContainer>
            <div className="py-25">
                <div>
                    <p>Contact Us</p>
                    <h1 className="text-4xl font-bold">Make an Appointment</h1>
                </div>
                
                <div className="max-w-[600px] space-y-5 mt-10">
                    <div className="flex gap-5">
                        <input type="text" placeholder="Full name" className="py-3 pl-5 w-[296px] bg-[#F9F9F9]"/>
                        <input type="text" placeholder="Email" className="py-3 pl-5 w-[296px] bg-[#F9F9F9]" />
                    </div>

                    <div className="flex gap-5">
                        <input type="text" placeholder="Please Select" className="py-3 pl-5 w-[296px] bg-[#F9F9F9]" />
                        <input type="text" placeholder="4:00 Available" className="py-3 pl-5 w-[296px] bg-[#F9F9F9]" />
                    </div>

                    <div>
                        <input type="text" placeholder="Please Select" className="py-3 pl-5 w-[600px] h-[140px] bg-[#F9F9F9]" />
                    </div>

                    <div>
                        <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl
                        hover:bg-hover transition-colors cursor-pointer">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
            </GridContainer>
        </section>
    )
}