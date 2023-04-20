const Sticker = ({text}: { text: string }) => {
    return (
        <div className={`flex justify-center items-center bg-yellow-500 font-neueMachina text-black text-sm text-center 
        rounded-full w-24 h-24 absolute -top-14 -right-10 -rotate-[10deg]`}>
            {text}
        </div>
    )
}

export default Sticker