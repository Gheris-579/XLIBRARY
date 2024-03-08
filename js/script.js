// filter array
let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        name : "Spare",
        dec: "by Prince Harry The Duke of Sussex",
        lag: "English",
        down: "#",
        info: "#",
        src: "./img/spare.png"
    },
    {
        id:2,
        name : "Metasploit 5.0",
        dec: "Metasploit 5.0 for Beginners: Perform penetration testing to secure your IT environment against threats and vulnerabilities, 2nd Edition",
        lag: "English",
        down: "#",
        info: "./home.html",
        src: "./img/Metasploit 5.0.png"
    },
    {
        id:3,
        name : "Linux Basics for Hackers",
        dec: "Linux Basics for Hackers: Getting Started with Networking, Scripting, and Security in Kali",
        lag: "English",
        down: "#",
        info: "#",
        src: "./img/Linux Basics for Hackers.png"
    },
    {
        id:4,
        name: "Automate the Boring Stuff with Python: Practical Programming for Total Beginners",
        dec: "Practical Programming for Total Beginners",
        lag: "italiano",
        down: "#",
        info: "#",
        src: "./img/Automate.png"
    },
    {
        id:5,
        name: "Network Basics for Hackers",
        dec: "Network Basics for Hackers: How Networks Work and How They Break",
        lag: "English",
        down: "#",
        link: "#",
        src: "./img/Network Basics for Hackers.png"
    },
    {
        id:6,
        name: "Hackerpunk",
        dec: "Hackerpunk vol.1 Profiling: Manuale interattivo di Ethical Hacking e Sicurezza informatica (Italian Edition)",
        lag: "italiano",
        down: "#",
        info: "#",
        src: "./img/Hackerpunk vol.1 Profiling Manuale interattivo di Ethical Hacking e Sicurezza informatica.png"
    },
    {
        id:7,
        name: "Getting Started Becoming a Master Hacker: Hacking is the Most Important Skill Set of the 21st Century!",
        dec: "This tutorial-style book follows upon Occupytheweb's Best Selling Linux Basics for Hackers and takes the reader along the next step to becoming a Master Hacker.",
        lag: "English",
        down: "#",
        info: "#",
        src: "./img/Getting Started Becoming a Master Hacker.png"
    },
    {
        id:8,
        name: "Nmap Network Scanning: The Official Nmap Project Guide to Network Discovery and Security Scanning",
        dec: "by Gordon Fyodor Lyon (Author)",
        lag: "English",
        down: "#",
        info: "#",
        src: "./img/nmap.png"
    },
    {
        id:9,
        name: "Hacklog Volume 1 Anonimato: Manuale sulla Sicurezza Informatica e Hacking Etico (Italian Edition)",
        dec: "Italian Edition ",
        lag: "Italian",
        down: "#",
        info: "#",
        src: "./img/Hacklog Volume 1.png"
    },
    {
        id:10,
        name: "Hacklog Volume 2 Web Hacking: Manuale sulla Sicurezza Informatica e Hacking Etico (Italian Edition)",
        dec: "Italian Edition ",
        lag: "Italian",
        down: "#",
        info: "#",
        src: "./img/Hacklog Volume 2.png"
    }
];

showgallery(galleryarray);

// create function to show card

function showgallery(curarra){
    document.getElementById("card").innerText = "";
    for(let i=0;i<curarra.length;i++){
        document.getElementById("card").innerHTML += `
    <div class="card mb-3" style="max-width: 540px; margin: auto;">
    <div class="row no-gutters hombra">
        <div class="col-md-4">
            <img src="${curarra[i].src}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${curarra[i].name}</h5>
                <p class="card-text fw-lighter">${curarra[i].dec}</p>
                <p class="card-text fw-light">Language ${curarra[i].lag}</p>
                  <a href="${curarra[i].down}" id="mybutton" class="btn btn-dark">Download
                  <svg width="23" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                  <path d="M12 15V3"></path>
                  </svg>
                  </a>
                   <a href="${curarra[i].info}" id="mybutton" class="btn btn-dark">Info
                   <svg width="23" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                   <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
                   </svg>
                  </a>
            </div>
        </div>
    </div>
</div>
       `
    }
}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }

    });
    if(this.value==""){
        showgallery(galleryarray);
    }
    else{
        if(filterarray == ""){
            document.getElementById("para").style.display = 'block'
            document.getElementById("card").innerHTML = "";
        }
        else{

            showgallery(filterarray);
            document.getElementById("para").style.display = 'none'
        }
    }
});


// Wrap every letter in a span
let textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml14 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeInOutExpo",
        duration: 900
    }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
}).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
})

// Title
let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = " Come back :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})


