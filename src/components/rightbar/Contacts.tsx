import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import andilane from "../../assets/contacts/andilane.png";
import drewcano from "../../assets/contacts/drewcano.png";
import katemorrison from "../../assets/contacts/katemorrison.png";
import natalicraig from "../../assets/contacts/natalicraig.png";
import orlandodiggs from "../../assets/contacts/orlandodiggs.png";
import korayokumus from "../../assets/contacts/korayokumus.png";

const Contacts = () => {
    const theme = useSelector((state: RootState) => state.theme);

    const Contacts = [
        {
            id: 1,
            image: natalicraig,
            name: "Natali Craig",
        },
        {
            id: 2,
            image: drewcano,
            name: "Drew Cano",
        },
        {
            id: 3,
            image: orlandodiggs,
            name: "Orlando Diggs",
        },
        {
            id: 4,
            image: andilane,
            name: "Andi Lane",
        },
        {
            id: 5,
            image: katemorrison,
            name: "Kate Morrison",
        },
        {
            id: 6,
            image: korayokumus,
            name: "Koray Okumus",
        },
    ];
    return (
        <div className="flex flex-col">
            <h2
                className={`${
                    theme === "dark" ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                } px-[4px] py-[8px] rounded-[8px] text-[14px] font-[600]`}
            >
                Contacts
            </h2>
            <ul>
                {Contacts.map((contact) => (
                    <li
                        key={contact.id}
                        className={`py-[4px] px-[8px] mt-[8px] rounded-[8px] flex items-center gap-[8px] ${
                            theme === "dark"
                                ? "hover:bg-[#F7F9FB]/[10%]"
                                : "hover:bg-[#1C1C1C]/[5%]"
                        }`}
                    >
                        <div className={`rounded-[8px] p-[4px]`}>
                            <img
                                src={contact.image}
                                alt={contact.name}
                                className="w-[24px] h-[24px] rounded-[80px]"
                            />
                        </div>
                        <p
                            className={`${
                                theme === "dark"
                                    ? "text-[#FFFFFF]"
                                    : "text-[#1C1C1C]"
                            } text-[14px] h-[20px] font-[400] overflow-hidden`}
                        >
                            {contact.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;
