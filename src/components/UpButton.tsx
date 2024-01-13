import { CaretUp } from "phosphor-react";

interface UpButtonProps {

}
export default function UpButton(props : UpButtonProps){
    return(
            <button className="fixed bottom-0 right-0 bg-primary border-2 border-black p-3 rounded-full m-4 z-50 shadow-2xl cursor-pointer hover:mb-6 hover:opacity-95 transition-all">
                <CaretUp size={28} color="black" weight="bold" />
            </button>
    )
}