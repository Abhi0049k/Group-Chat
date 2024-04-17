import { useUserCard } from "@/hooks/useUserCard";
import { FC } from "react";
import { FiMoreVertical } from "react-icons/fi";

export interface activePreviousUserI {
    name: string;
    id: string;
    handleClick: (id: string) => void;
}

const UserCard: FC<activePreviousUserI> = ({ name, id, handleClick }) => {
    const { selected, handleChat } = useUserCard(id, handleClick)

    return (
        <div data-id={id} className={`cursor-pointer border max-h-14 p-4 flex text-wrap justify-between ${selected ? 'bg-primary-foreground' : ''} items-center rounded-md`} onClick={handleChat}>
            <p>
                {name}
            </p>
            <div className="hover:bg-[hsl(var(--muted))] py-2 px-1 rounded">
                <FiMoreVertical className="text-lg" />
            </div>
        </div>
    );
}

export default UserCard;