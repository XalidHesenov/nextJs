const News = (props: { header: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => {
    return(
        <div className="text-black">
            <p className="font-bold text-2xl pt-2 px-4">{props.header}</p>
            <p className="px-4 mt-1 font-bold text-xs text-gray-400">{props.date}</p>
            <p className="px-4 pr-1 mt-2">{props.text}</p>
        </div>
    )
}

export default News