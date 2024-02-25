import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"

const Card = (props: { photoPath: string | undefined; cardText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => {
    return (
        <div className="w-72 mx-5 mt-5 items-center text-center bg-white">
            <img className="p-5 w-32 m-auto h-32" src={props.photoPath} alt="Sunset in the mountains" />
            <div className="px-6 items-center text-center flex justify-center bg-blue-900 h-24">
                <div className="font-bold text-center uppercase">{props.cardText}</div>
            </div>
        </div>
    )
}

export default Card