export default function swDev()
{
    let swUrl = 'http://localhost:3000/sw.js'
    navigator.serviceWorker.register(swUrl).then(
        (response) => {
            console.log("response",response);
        }
    );
}