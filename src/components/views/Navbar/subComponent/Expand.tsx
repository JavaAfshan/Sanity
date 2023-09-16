import { FC } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Link from "next/link"
import { useState } from "react"
import DropDown from "./DropDown"

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
    const [isExpanded, setExpanded] = useState<boolean>(false);
    function handleExpand() {
        setExpanded(!isExpanded);
    }
    return (
        <div>
            <li className={`${isExpanded ? "h-56" : "h-12"} duration 300 list-none group `}>
                <div onClick={handleExpand} className="flex justify-between items-center gap-2   group-hover:bg-purple-950   group-hover:text-white py-2 px-4 rounded-md" >
                    <Link href={item.href} className="">{item.label}</Link>
                    {
                        item.isDropDown ? <HiOutlineChevronDown className="justify-between items-center -rotate-180 group-hover:rotate-0 duration-300  " size={25} /> : ""
                    }
                </div>
                <div className="flex flex-col space-y-1 mt-2">
                    {item.isDropDown && <div className={`invisible group-hover:visible group-hover:duration-300 absolute right-[170px] top-20 px-6 py-2 font-light rounded-sm m-width-[7.8rem]  bg-gray-100`}>
                        <DropDown item={item} />
                    </div>
                    }
                </div>
            </li>
        </div>
    )
}

export default Expand