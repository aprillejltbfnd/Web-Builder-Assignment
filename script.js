// --- NAVIGATION BAR ---
function toggleOptions() {
    var toggleOptions = document.getElementById("toggleOptions");

    var navLinksMoved = toggleOptions.classList.contains("nav-links-moved");

    if (window.innerWidth <= 768 && !navLinksMoved) {
        var navLinks = document.querySelector(".nav-links");
        var toggleOptionsList = document.querySelector(".toggle-options");

        navLinks.querySelectorAll("li").forEach(function (item) {
            toggleOptionsList.appendChild(item.cloneNode(true));
        });

        toggleOptions.classList.add("nav-links-moved");
    } else {
        toggleOptions.classList.toggle("show");
    }
}

// --- CHANGING IMAGES ---
let currentImageIndex = 0;
const images = document.querySelectorAll('.column2 .image-container img');
const totalImages = images.length;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateImageDisplay();
}

function updateImageDisplay() {
    images.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}


setInterval(changeImage, 5000); 

let currentImageIndex1 = 0;
const images1 = document.querySelectorAll('.column1 .image-container img');
const totalImages1 = images1.length;

function changeImage1() {
    currentImageIndex1 = (currentImageIndex1 + 1) % totalImages1;
    updateImageDisplay1();
}

function updateImageDisplay1() {
    images1.forEach((img, index) => {
        img.style.display = index === currentImageIndex1 ? 'block' : 'none';
    });
}


setInterval(changeImage1, 5000); 

$(document).ready(function () {
    $('.draw-border').each(function () {
        $(this).html('<span class="icon">' + $(this).html() + '</span><span class="circle"><span><em></em></span><span><em></em></span></span>');
    });
});


// --- MODAL ---
function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


// --- INPUT FIELD MODAL ---
var $inputs = $("input");

$inputs.on('focus', function() {
  var $self =  $(this);
  $self.prev().addClass('active');
});

$inputs.on('focusout', function() {
  var $self =  $(this);
  $self.val() == "" ? $self.prev().removeClass('active') : "";
});