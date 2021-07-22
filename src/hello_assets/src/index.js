import { hello } from "../../declarations/hello";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hello actor, calling the greet method
  const greeting = await hello.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
