export default function swDev() {
  let swURL = process.env.PUBLIC_URL + "/sw.js";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(swURL)
      .then(() => {
        console.log("Service Worker Registered Successfully");
      })
      .catch(() => {
        console.log("Failed to register Service Worker");
      });
  }
}
