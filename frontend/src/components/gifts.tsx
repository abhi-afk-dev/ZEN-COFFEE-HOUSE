interface GiftItems {
    id: number;
    name: string;
    price: string;
    image: string;
}
interface GiftsProps {
    items: GiftItems[];
}

function Gifts({ items }: GiftsProps){

    return (
        <div className="flex flex-wrap items-center justify-center gap-12 py-10 px-20">
            {items.map((items) => (
                <div key={items.id} className="flex flex-col items-end justify-center bg-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-lg py-4 px-10">
                    <div className="flex flex-row items-center justify-around p-4 ">
                        <img src={items.image} alt="" className="w-full"/>
                        <p className="my-custom-robotocondensed-text text-2xl">{items.name}</p>
                    </div>
                    <button className="my-custom-robotocondensed-text text-1xl bg-white text-black py-2 px-8 rounded-lg hover:bg-black transition duration-300 hover:text-white">
                        {items.price}
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Gifts;