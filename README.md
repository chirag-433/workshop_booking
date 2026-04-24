# **Workshop Booking**

> This website is for coordinators to book a workshop(s), they can book a workshop based on instructors posts or can propose a workshop date based on their convenience.


### Features
* Statistics
    1. Instructors Only
        * Monthly Workshop Count
        * Instructor/Coordinator Profile stats
        * Upcoming Workshops
        * View/Post comments on Coordinator's Profile
    2. Open to All
        * Workshops taken over Map of India
        * Pie chart based on Total Workshops taken to Type of Workshops.

* Workshop Related Features
    > Instructors can Accept, Reject or Delete workshops based on their preference, also they can postpone a workshop based on coordinators request.

## Local Setup Instructions

1. Install the required Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Generate and apply database migrations (ensure `cms` and `teams` apps are explicitly generated):
   ```bash
   python manage.py makemigrations cms teams
   python manage.py makemigrations
   python manage.py migrate
   ```
3. (Optional) Create a superuser for the admin panel:
   ```bash
   python manage.py createsuperuser
   ```
4. Start the Django development server:
   ```bash
   python manage.py runserver
   ```
5. Visit `http://localhost:8000/` in your browser.

__NOTE__: Check `docs/Getting_Started.md` for more detailed info on initial group configuration.

## Project Reflection

### What design principles guided your improvements?
My improvements were guided by a focus on creating a rich, dynamic, and clean user experience. I emphasized clear visual hierarchy and modern aesthetics. By introducing interactive elements and refining the layout, I aimed to make the interface feel responsive and intuitive, providing users with a more engaging and seamless experience.

### How did you ensure responsiveness across devices?
Responsiveness was ensured by leveraging flexible CSS layouts (like Flexbox and Grid) alongside responsive design utilities. This approach guarantees that UI components and page layouts scale appropriately, maintaining their structural integrity, legibility, and alignment across various screen sizes and devices (from mobile to desktop).

### What trade-offs did you make between the design and performance?
Introducing dynamic, state-driven interactions and smoother CSS transitions adds a marginal amount of rendering overhead compared to a purely static layout. However, this minor performance trade-off was intentionally made because the micro-animations and polished styling significantly elevate the premium feel, usability, and aesthetic quality of the application.

### What was the most challenging part of the task and how did you solve it?
The most challenging part was implementing the dynamic styling and responsive behaviors without breaking the existing component structure or over-complicating the logic. This was solved by carefully managing the component structure, abstracting styles where necessary, and applying conditional styling that triggers smooth CSS transitions to gracefully alter the layout across different states and screen sizes.
