const date = document.querySelector('date');


const showDate = () =>{
    const day = new Date();
    const time = day.getTime();
    let reveal;
    reveal = `${day} + ${time}`;

    return console.log(reveal);
}

document.querySelector('date').innerHTML = showDate();
