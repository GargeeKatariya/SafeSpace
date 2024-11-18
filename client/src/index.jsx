import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppContainer from "./AppContainer";

// Define the chatbot configuration
window.embeddedChatbotConfig = {
  chatbotId: "gTNAPuVMrOTlCVs-Jb79E",
  domain: "www.chatbase.co"};
// Render your React app
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
);

<script
src="https://www.chatbase.co/embed.min.js"
chatbotId="gTNAPuVMrOTlCVs-Jb79E"
domain="www.chatbase.co"
defer>
</script>