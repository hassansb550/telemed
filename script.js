// Handle appointment booking
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");
  const confirmation = document.getElementById("confirmation");
  const appointmentsList = document.getElementById("appointmentsList");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const doctor = document.getElementById("doctor").value;
      const date = document.getElementById("date").value;

      const appointment = `${name} booked with ${doctor} on ${date}`;
      localStorage.setItem("appointment", appointment);
      confirmation.textContent = "✅ Appointment booked successfully!";
    });
  }

  if (appointmentsList) {
    const appointment = localStorage.getItem("appointment");
    if (appointment) {
      const li = document.createElement("li");
      li.textContent = appointment;
      appointmentsList.appendChild(li);
    }
  }
});
