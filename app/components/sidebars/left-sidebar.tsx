import Button from "../Button/button"
const LeftSidebar = () => {
    return (
        <div className="bg-gray-100 ml-44 w-[270px] pr-5">
            <Button text={"Maliyyə Nazirliyinin apellyasiya şurası"}/>
            <Button text={"elektron xidmətlər"}/>
            <Button text={"etik məsələlər"}/>
            <img src="/heydar-100.png" className="mt-4"/>
            <img src="/cagrimerkezi.jpg" className="mt-2"/>
            <div className="bg-red-500 mt-2 flex items-center h-20">
                <p className=" text-6xl">@</p>
                <p className="font-bold ml-8">office@maliyye.gov.az</p>
            </div>
            <img src="/faqbanner.jpg" className="mt-2"/>
        </div>
    )
}

export default LeftSidebar