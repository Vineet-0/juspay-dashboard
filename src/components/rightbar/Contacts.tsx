import { useSelector } from "react-redux";
import { type RootState } from "../../store";
import andilane from "../../assets/contacts/andilane.png";
import drewcano from "../../assets/contacts/drewcano.png";
import katemorrison from "../../assets/contacts/katemorrison.png";
import korayokumus from "../../assets/contacts/korayokumus.png";
import natalicraig from "../../assets/contacts/natalicraig.png";
import orlandodiggs from "../../assets/contacts/orlandodiggs.png";

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
        <div className="max-h-1/3 p-3 flex-1 ">
            <h2 className="text-lg font-semibold mb-2">Contacts</h2>
            <ul
                className={`flex flex-col gap-2 h-[88%] overflow-y-auto ${
                    theme === "dark"
                        ? "scrollbar-custom-dark"
                        : "scrollbar-custom-light"
                }`}
            >
                {Contacts.map((contact) => (
                    <li
                        key={contact.id}
                        className="p-1  flex items-center gap-2"
                    >
                        <div className={`rounded-lg p-1 text-black`}>
                            <img
                                src={contact.image}
                                alt={contact.name}
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium">
                                {contact.name}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;
