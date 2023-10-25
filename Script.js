const getColor=()=>{
    const rendorenumber=Math.floor(Math.random() * 16777215)
    const rendomeCode="#"+rendorenumber.toString(16);
    document.body.style.backgroundColor=rendomeCode;
    document.getElementById("color-code").innerText=rendomeCode;
    navigator.clipboard.writeText(rendomeCode)
}

document.getElementById('btn').addEventListener(
    'click',
    getColor
)

getColor()