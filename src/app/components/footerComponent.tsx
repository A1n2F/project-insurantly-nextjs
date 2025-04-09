const company = [
    "About Us",
    "Carrier",
    "We are hiring",
    "Blog",
]

const features = [
    "Business Marketing",
    "User Analytic",
    "Live Chat",
    "Unlimited Support",
]

const resources = [
    "IOS & Android",
    "Watch a Demo",
    "Customers",
    "API",
]



export function FooterComponent() {
    return (
        <>
        <div className="flex items-center justify-center gap-40">
            <div>
                <h1 className="text-xl text-white font-bold mb-5">Company Info</h1>
                <ul className="space-y-2 text-white">
                    {company.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h1 className="text-xl text-white font-bold mb-5">Legal</h1>
                <ul className="space-y-2 text-white">
                {company.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>

            <div>
                <h1 className="text-xl text-white font-bold mb-5">Features</h1>
                <ul className="space-y-2 text-white">
                {features.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>

            <div>
                <h1 className="text-xl text-white font-bold mb-5">Resources</h1>
                <ul className="space-y-2 text-white">
                {resources.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
        </div>
        </>
    )
}