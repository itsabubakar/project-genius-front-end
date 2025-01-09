import Accordion from "../components/accordion"
export default function Help() {
    return(
        <section className="flex flex-col px-3 py-6 gap-8">
                
            <div className="flex flex-col gap-6 items-center md:items-start">
                <h2 className="text-[32px] md:text-[44px] font-bold">Find The Help You Need</h2>
                <br />
                <h5 className="text-[24px] md:text-[28px] font-medium spaci">Frequently Asked Questions</h5>

            </div>

            <Accordion/>

            
        </section>
    )
}