document.addEventListener("DOMContentLoaded", () => {
  const sessionId = uuid.v4();
  const promptInput = document.getElementById("prompt");
  const responseDiv = document.getElementById("response");
  const submitButton = document.getElementById("submitButton");
  const clearHistoryButton = document.getElementById("clearHistoryButton");
  const clearChatButton = document.getElementById("clearChatButton");
  const showChatButton = document.getElementById("showChatButton");
  const gptContainer = document.getElementById("gptContainer");

  let PASSWORD = null;

  const fetchPassword = async () => {
    try {
      const response = await fetch("https://theobragstad.fly.dev/api/get-password");
      const data = await response.json();
      PASSWORD = data.password;
    } catch (error) {
      console.error("Error fetching password:", error);
    }
  };

  fetchPassword();


  const handleChatCompletion = async () => {
    try {
      submitButton.textContent = "loading...";
      submitButton.disabled = true;
      submitButton.cursor = "default";

      const data = {
        userSession: sessionId,
        prompt: promptInput.value,
      };

      const apiResponse = await fetch(
        "https://theobragstad.fly.dev/api/chat-completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await apiResponse.text();
      responseDiv.innerHTML = result;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      submitButton.textContent = "submit";
      submitButton.disabled = false;
    }
  };

  const handleClearHistory = async () => {
    try {
      const apiResponse = await fetch(
        "https://theobragstad.fly.dev/api/clear-history",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        }
      );
      const result = await apiResponse.text();
      alert(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClearChat = () => {
    promptInput.value = "";
    responseDiv.innerHTML = "";
  };

  const handleToggleChat = async () => {
    const enteredPassword = prompt("Please enter the password to access the chatbot:");

    try {
      const response = await fetch("https://theobragstad.fly.dev/api/validate-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: enteredPassword }),
      });

      const result = await response.json();

      if (result.success) {
        if (gptContainer.style.display === "none" || gptContainer.style.display === "") {
          gptContainer.style.display = "block";
        } else {
          gptContainer.style.display = "none";
        }
      } else {
        alert("Incorrect password. Please try again.");
      }
    } catch (error) {
      console.error("Error validating password:", error);
      alert("An error occurred while validating the password. Please try again.");
    }
  };

 

  promptInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        promptInput.value += "\n";
      } else {
        event.preventDefault();
        handleChatCompletion();
      }
    }
  });

  
  showChatButton.addEventListener("click", handleToggleChat);
  submitButton.addEventListener("click", handleChatCompletion);
  clearHistoryButton.addEventListener("click", handleClearHistory);
  clearChatButton.addEventListener("click", handleClearChat);
});
