function handleMenu() {
    const dropdown = document.querySelector(".dropdown-menu");
    dropdown.classList.toggle("hidden");
}

const allbuttons= document.querySelectorAll('.readMoreBtn');
allbuttons.forEach(button => {
    button.addEventListener('click', function () {
        const descriptions = this.previousElementSibling;
        // console.log(descriptions)
        // console.log(description)
        if(descriptions.style.display==='none') {

            descriptions.style.display = 'block';
            button.textContent = 'Read Less';
            }
            else {
                descriptions.style.display = 'none';
                button.textContent = 'Read More';
            }
        })
})
document.addEventListener('DOMContentLoaded', function () {
const slides = document.querySelectorAll('#slider img');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
    }

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);
});
document.addEventListener('DOMContentLoaded', function () {
const eventDate = new Date("30 September 2024 12:00:00 AM");
function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').textContent = "Event has started!";
    }
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
});

window.addEventListener("load", function() {
    setTimeout(function open(event) {
        const popup = document.querySelector('.popup');
        popup.classList.remove('hidden');  // Make it visible
        setTimeout(() => { // Ensure transition happens after being visible
            popup.classList.remove('opacity-0');  // Trigger the fade-in
            popup.classList.add('opacity-100');
        }, 50);  // Small delay to allow the browser to apply the hidden removal before transitioning
        document.querySelector('body').style.overflow = 'hidden';
    }, 1000);
});

document.getElementById("close").addEventListener("click", function() {
    const popup = document.querySelector('.popup');
    popup.classList.remove('opacity-100'); // Start fade-out
    popup.classList.add('opacity-0');    // Trigger fade-out
    setTimeout(() => {
        popup.classList.add('hidden');  // After fade-out, set hidden again
        document.querySelector('body').style.overflow = 'auto';  // Restore scroll
    }, 1000);  // Match the fade-out duration to the animation duration
});

// Events Section
const eventsArr = [
    {
      id: 1,
      name: "DJ Event",
      category: "Music",
      img: "https://picsum.photos/700/700",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta possimus, similique voluptas placeat animi incidunt culpa quisquam autem laudantium, ipsa impedit adipisci error magnam? Porro commodi a nam corporis.",
      schedule: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi iure minima corporis? Deserunt ab, non incidunt eaque, ea cum perspiciatis culpa aliquid eligendi pariatur iusto molestias nobis modi aspernatur?",
      faqs: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia beatae tenetur cupiditate aliquid ut! Officia tempore laudantium possimus totam eum. Id maxime natus pariatur? Reprehenderit cupiditate at doloremque. Aut, deleniti?"
    },
    {
      id: 2,
      name: "Art Workshop",
      category: "Art",
      img: "https://picsum.photos/700/700",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius quasi blanditiis architecto amet. Delectus, molestiae officiis? Consectetur at voluptates tempore adipisci architecto veritatis, id, quod ipsam veniam exercitationem officia.",
      schedule: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolorum dicta doloribus quis quam placeat eligendi iste hic, asperiores recusandae amet vitae voluptatum, magnam minus? Ullam rerum consequatur blanditiis nobis.",
      faqs: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eligendi voluptatum itaque numquam consectetur sequi autem ullam nobis eos commodi voluptates voluptate, cupiditate obcaecati quod illum facere quas atque beatae."
    },
    {
      id: 3,
      name: "Tech Conference",
      category: "Technology",
      img: "https://picsum.photos/700/700",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa magni rem quisquam dolorum nisi, laudantium soluta corporis autem expedita maiores! Inventore in at ab sint libero qui nihil totam.",
      schedule: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non ratione deserunt facere adipisci illum ipsam enim nostrum eveniet, doloremque nam, pariatur, suscipit voluptatum quod? Tenetur soluta eveniet repellendus quam.",
      faqs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis temporibus atque, officia perferendis nulla itaque inventore sit deleniti quasi quaerat aspernatur provident in. Natus amet nulla deleniti illo laudantium."
    }
    ];
    
    const eventList = document.getElementById("event-list");
    
    function displayEvents(events) {
    const showEventsInHtml = events.map((event) => {
      return `
          <div class="event" data-name="${event.name}" data-category="${event.category}">
              <img class="mb-4" src="${event.img}" alt="${event.name}" />
              <div class="bg-white p-4 rounded-lg shadow">
                  <h4 class="font-bold text-lg">${event.name}</h4>
                  <p class="text-sm text-gray-600">Category: ${event.category}</p>
              </div>
              <div class="mt-4 mb-4 bg-white p-4 rounded-lg shadow">
                  <div class="border-b border-gray-200">
                      <nav class="-mb-px flex space-x-8">
                          <button class="tab active text-gray-900 pb-2 px-1 border-b-2 font-medium text-sm" onclick="openTab(event, 'details${event.id}', ${event.id})">Details</button>
                          <button class="tab text-gray-500 hover:text-gray-700 pb-2 px-1 border-b-2 font-medium text-sm" onclick="openTab(event, 'schedule${event.id}', ${event.id})">Schedule</button>
                          <button class="tab text-gray-500 hover:text-gray-700 pb-2 px-1 border-b-2 font-medium text-sm" onclick="openTab(event, 'faqs${event.id}', ${event.id})">FAQs</button>
                      </nav>
                  </div>
                  <div class="tab-content mt-4">
                      <div id="details${event.id}" class="tab-pane active">
                          <p>${event.details}</p>
                      </div>
                      <div id="schedule${event.id}" class="tab-pane hidden">
                          <p>${event.schedule}</p>
                      </div>
                      <div id="faqs${event.id}" class="tab-pane hidden">
                          <p>${event.faqs}</p>
                      </div>
                  </div>
              </div>
          </div>
          `;
    }).join("");
    
    eventList.innerHTML = showEventsInHtml;
    }
    
    // Function to handle tab switching
    function openTab(evt, tabId, eventId) {
    const tabs = document.querySelectorAll(`#event-list .event[data-name="${eventsArr[eventId-1].name}"] .tab`);
    const tabPanes = document.querySelectorAll(`#event-list .event[data-name="${eventsArr[eventId-1].name}"] .tab-pane`);
    
    tabs.forEach(tab => {
      tab.classList.remove('active');
      tab.classList.add('text-gray-500');
      tab.classList.remove('text-gray-900');
    });
    
    tabPanes.forEach(tabPane => {
      tabPane.classList.add('hidden');
      tabPane.classList.remove('active');
    });
    
    evt.currentTarget.classList.add('active');
    evt.currentTarget.classList.add('text-gray-900');
    evt.currentTarget.classList.remove('text-gray-500');
    
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId).classList.add('active');
    }
    
    // Filter function
    function filterEvents() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredEvents = eventsArr.filter(event => {
      const eventName = event.name.toLowerCase();
      const eventCategory = event.category.toLowerCase();
      return eventName.includes(searchInput) || eventCategory.includes(searchInput);
    });
    
    displayEvents(filteredEvents);
    }
    
    // Initial display of all events
    window.addEventListener("DOMContentLoaded", function () {
    displayEvents(eventsArr);
    });
    