

document.addEventListener('click', function(event) {

  var clickedElement = event.target;
   
  // var decreaseButton = document.getElementById('decrease');
  // var increaseButton = document.getElementById('increase');
  // var quantityInput = document.getElementById('quantity');
  
 

  // // هذا يمنع النقر على الأزرار من تنفيذ أي عملية تصفح آخرى
  // event.preventDefault();


  // if (clickedElement.classList.contains('de')) { // تحقق من النقر على زر النقصان
  //   const currentValue = parseInt(quantityInput.value);
  //   if (currentValue > 1) {
  //     quantityInput.value = currentValue - 1;
  //   }
  // }

  // if (clickedElement.classList.contains('in')) { // تحقق من النقر على زر الزيادة
  //   const currentValue = parseInt(quantityInput.value);
  //   quantityInput.value = currentValue + 1;
  // }
  // Check if the clicked element is an image with a specific class
  if (clickedElement.classList.contains('clickable-image')) {
    var clickedImage = event.target.closest('.clickable-image');
  
    if (clickedImage) {
      // If clicked element is an image, toggle grayscale
      toggleImageGrayscale(clickedImage);
    } else {
      // If clicked element is outside the image, remove grayscale from all images
      var images = document.querySelectorAll('.clickable-image');
      images.forEach(function(image) {
        image.classList.remove('grayscale');
      });
    }
  }

  // Check if the clicked element is a button with a specific class
  if (clickedElement.classList.contains('btn')) {
    closeDropdowns(event.target);

  }
  closeDropdowns(clickedElement);
  if (clickedElement.classList.contains('btn')) {
    closeDropdownsnotification(event.target);

  }
  closeDropdownsnotification(clickedElement);
  if (clickedElement.classList.contains('btn')) {
    closeDropdownsprofile(event.target);

  }
  closeDropdownsprofile(clickedElement);
  
  // var toggleButton = document.getElementById("toggleEncryption");
  // var heading = document.getElementById("encrypted-heading");
  // if (toggleButton.classList.contains('title-pass')) {
  //   event.preventDefault(); // Prevent the default form submission
  
  //   heading.classList.toggle("encrypted");
  //   heading.style.color = "#1E3D8F";
  //   heading.style.fontWeight = "400";

  // }
  
});


function toggleDropdown(button) {
  var dropdownContent = button.nextElementSibling;
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

function closeDropdowns(clickedElement) {
  var dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(function(dropdown) {
    if (dropdown.style.display === "block" && !dropdown.parentNode.contains(clickedElement)) {
      dropdown.style.display = "none";
    }
  });
}
function closeDropdownsnotification(clickedElement) {
  var dropdowns = document.querySelectorAll('.dropdown-notification-content');
  dropdowns.forEach(function(dropdown) {
    if (dropdown.style.display === "block" && !dropdown.parentNode.contains(clickedElement)) {
      dropdown.style.display = "none";
    }
  });
}
function closeDropdownsprofile(clickedElement) {
  var dropdowns = document.querySelectorAll('.dropdown-profile-content');
  dropdowns.forEach(function(dropdown) {
    if (dropdown.style.display === "block" && !dropdown.parentNode.contains(clickedElement)) {
      dropdown.style.display = "none";
    }
  });
}



function toggleImageGrayscale(image) {
  image.classList.toggle('grayscale');
}
document.addEventListener('click', function(event) {
  // Check if the clicked element is an image or inside an image container
  var clickedImage = event.target.closest('.clickable-image');
  
  if (clickedImage) {
    // If clicked element is an image, toggle grayscale
    toggleImageGrayscale(clickedImage);
  } else {
    // If clicked element is outside the image, remove grayscale from all images
    var images = document.querySelectorAll('.clickable-image');
    images.forEach(function(image) {
      image.classList.remove('grayscale');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      menuItems.forEach(function(otherItem) {
        otherItem.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
});


window.onscroll = function() {
  // Get the header element
  var header = document.getElementById("header");

  // Add or remove the "sticky" class based on the scroll position
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
