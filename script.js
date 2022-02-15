function random_number(stop) {
    return Math.floor(Math.random() * stop) + 1;
}

function pick_photos() {
    let p1 = document.getElementById("home-img-1");
    let p2 = document.getElementById("home-img-2");
    let p3 = document.getElementById("home-img-3");
    let p4 = document.getElementById("home-img-4");

    let photos = new Set();
    while (photos.size < 4) {
        photos.add(random_number(27));
    }

    let photo_choices = new Array();
    for (const entry of photos.values()) {
        photo_choices.push(entry);    
    }

    p1.src = `assets/home-photos/${photo_choices[0]}.jpg`;
    p2.src = `assets/home-photos/${photo_choices[1]}.jpg`;
    p3.src = `assets/home-photos/${photo_choices[2]}.jpg`;
    p4.src = `assets/home-photos/${photo_choices[3]}.jpg`;
}

window.onload = event => {
    pick_photos();
};