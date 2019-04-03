export default function initSendMessage() {
  const conversationArea_div = document.querySelector(".conversation-area");
  const sendInput_input = document.querySelector(".send-input #input");
  const buttonSendMessage = document.querySelector(".buttonsend");
  const classMessage = "ballon-send";

  const getTimeSendMessage = () => new Date();
  const getTimeSendMessageHours = () =>
    getTimeSendMessage()
      .getHours()
      .toString()
      .padStart(2, "0");
  const getTimeSendMessageMinutes = () =>
    getTimeSendMessage()
      .getMinutes()
      .toString()
      .padStart(2, "0");

  const printMessage = () => {
    const textInputUser = sendInput_input.value;
    const ballonSend = document.createElement("div");
    const time = getTimeSendMessageHours() + ":" + getTimeSendMessageMinutes();
    const span = document.createElement("span");
    const textmessage = document.createElement("p");

    ballonSend.classList.add(classMessage);
    span.classList.add("time");
    span.innerText = time;
    textmessage.classList.add("message");
    textmessage.innerHTML = textInputUser;

    ballonSend.appendChild(span);
    ballonSend.appendChild(textmessage);

    conversationArea_div.appendChild(ballonSend);
  };

  const autoScrollLastMessage = () => {
    const lastMessage = conversationArea_div.lastChild;
    conversationArea_div.scrollTop = lastMessage.offsetTop;
  };

  const cleanUserInput = () => (sendInput_input.value = "");

  const handleKeyUp = event => {
    if (sendInput_input.value && event.keyCode == 13) {
      printMessage();
      autoScrollLastMessage();
      cleanUserInput();
    }
  };

  const handleClick = () => {
    if (sendInput_input.value) {
      printMessage();
      autoScrollLastMessage();
      cleanUserInput();
    }
  };

  buttonSendMessage.addEventListener("click", handleClick);
  sendInput_input.addEventListener("keyup", handleKeyUp);
}
