import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import Image from "next/image";
import {Edit, Trash} from "lucide-react";
import {deleteProduct} from "@/utils-front/ProductsCalls";
import RoomSkeleton from "@/components/room-skeleton";
import {useRouter} from "next/navigation";

interface SubCategoryCardProps {
    key: any;
    product:any;
    prodid:any;
    deletemodel:any
    updateModel:any
    idcat:any
}
const iconMap: { [key: string]: React.ComponentType } = {
    Smartphone,
    Tablet,
    Laptop,
    Monitor,
    Tv,
    Router,
    Wifi,
    Camera,
    Printer,
    Keyboard,
    Mouse,
    Gamepad: Gamepad2,
    Headphones,
    Watch,
    Refrigerator,
    WashingMachine,
    Fan,
    Lamp,
    Thermometer,
    Plug,
    Battery,
    Activity,
    Car,
    Shield,
    Lock,
    Wind,
    Cpu,
    HardDrive,
};
import {
    Smartphone,
    Tablet,
    Laptop,
    Monitor,
    Tv,
    Router,
    Wifi,
    Camera,
    Printer,
    Keyboard,
    Mouse,
    Gamepad2,
    Headphones,
    Watch,
    Refrigerator,
    WashingMachine,
    Fan,
    Lamp,
    Thermometer,
    Plug,
    Battery,
    Activity,
    Car,
    Shield,
    Lock,
    Wind,
    Cpu,
    HardDrive,
} from "lucide-react";

const ModelCard = ({product,prodid,deletemodel,updateModel,idcat}:SubCategoryCardProps) => {
    const [loading, setLoading] = useState(true)

    async function handelDelete() {
        deletemodel(true)
        prodid(product._id)

    }
    async function handelUpdate() {
        updateModel(true)
        prodid(product._id)

    }
    useEffect(() => {
        setLoading(true);
    }, []);
    console.log(product)

    const Icon = iconMap[product?.picture] || null;


    const router=useRouter()



    return (
        <div>
            {loading ?  (

                    <div
                        className="group hover:shadow-2xl hover:scale-[1.02] transition-all    hover:border hover:border-gray-200 duration-300 ease-in-out  rounded-3xl p-4 relative overflow-hidden cursor-pointer">
                        {/* Card Content */}
                        <div className="flex flex-col items-center gap-4">

                            {Icon && (
                                <Icon onClick={() => router.push(`${idcat}/${product._id}`)}
                                      className="w-12 h-12 text-gray-500 transition-transform duration-300 group-hover:scale-110" />
                            )}
                            <div className="text-center w-full truncate">

                                <h1 className="text-lg font-semibold text-gray-800 truncate">{product.modelName || "Unnamed Product"}</h1>
                                <span className="text-gray-500 text-sm">created At{product.createdAt?.slice(0, 10)}</span>

                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div
                            className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handelUpdate();
                                }}
                                className="p-2 bg-orange-100 hover:bg-orange-200 rounded-full transition"
                            >
                                <Edit className="w-5 h-5" style={{color: "#FF8343"}}/>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handelDelete();
                                }}
                                className="p-2 bg-red-100 hover:bg-red-200 rounded-full transition"
                            >
                                <Trash className="w-5 h-5" style={{color: "red"}}/>
                            </button>
                        </div>
                    </div>
                    // </Link>

                ) :
                <RoomSkeleton/>


            }</div>

    );
};

export default ModelCard;