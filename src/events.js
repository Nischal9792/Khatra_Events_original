function handleMenu() {
  const dropdown = document.querySelector(".dropdown-menu");
  dropdown.classList.toggle("hidden");
}

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
                  <nav class=" flex  justify-between">
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
const eventElement = evt.currentTarget.closest('.event');
const tabs = eventElement.querySelectorAll('.tab');
const tabPanes = eventElement.querySelectorAll('.tab-pane');

// Deactivate all tabs and hide all tab panes
tabs.forEach(tab => {
  tab.classList.remove('active');
  tab.classList.add('text-gray-500');
  tab.classList.remove('text-gray-900');
});

tabPanes.forEach(tabPane => {
  tabPane.classList.add('hidden');
  tabPane.classList.remove('active');
});

// Activate the clicked tab and show the corresponding tab pane
evt.currentTarget.classList.add('active');
evt.currentTarget.classList.add('text-gray-900');
evt.currentTarget.classList.remove('text-gray-500');

const activeTabPane = document.getElementById(tabId);
activeTabPane.classList.remove('hidden');
activeTabPane.classList.add('active');
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

// To display only one tab section at a time and other tab sections for other events should remain hidden
function openTab(evt, tabId, eventId) {
  // Hide all tab sections for all events
  const allEvents = document.querySelectorAll('.event');
  allEvents.forEach(eventElement => {
    const tabPanes = eventElement.querySelectorAll('.tab-pane');
    const tabs = eventElement.querySelectorAll('.tab');

    tabPanes.forEach(tabPane => {
      tabPane.classList.add('hidden');
      tabPane.classList.remove('active');
    });

    tabs.forEach(tab => {
      tab.classList.remove('active');
      tab.classList.add('text-gray-500');
      tab.classList.remove('text-gray-900');
    });
  });

  // Show the selected tab section for the current event
  const eventElement = evt.currentTarget.closest('.event');
  const tabs = eventElement.querySelectorAll('.tab');
  const tabPanes = eventElement.querySelectorAll('.tab-pane');

  // Deactivate all tabs and hide all tab panes within the current event
  tabs.forEach(tab => {
    tab.classList.remove('active');
    tab.classList.add('text-gray-500');
    tab.classList.remove('text-gray-900');
  });

  tabPanes.forEach(tabPane => {
    tabPane.classList.add('hidden');
    tabPane.classList.remove('active');
  });

  // Activate the clicked tab and show the corresponding tab pane
  evt.currentTarget.classList.add('active');
  evt.currentTarget.classList.add('text-gray-900');
  evt.currentTarget.classList.remove('text-gray-500');

  const activeTabPane = document.getElementById(tabId);
  activeTabPane.classList.remove('hidden');
  activeTabPane.classList.add('active');
}