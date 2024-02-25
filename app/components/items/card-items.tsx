import Card from "./card";

export default function CardItems() {
    return (
        <div className="w-full bg-gray-300 pb-6 justify-center flex">
            <Card cardText={"İCMAL BÜDCƏ VƏ DÖVLƏT BÜDCƏSİ"} photoPath={"/case.png"}/>
            <Card cardText={"ORTAMÜDDƏTLİ XƏRCLƏR ÇƏRÇİVƏSİ"} photoPath={"/cf.png"}/>
            <Card cardText={"Büdcənin gəlir və xərc hissəsinin yerinə yetirilməsinin təhlili"} photoPath={"/lp.png"}/>
            <Card cardText={"DÖVLƏT BORCU"} photoPath={"/gr.png"}/>
        </div>
    )
}