import { useEffect } from "react";
import notificationSound from "../../public/sounds/notification.mp3";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessage } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessage([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessage, messages]);
};
export default useListenMessages;