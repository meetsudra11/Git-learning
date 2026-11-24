// 5 hardcoded medicine orders.
// An empty string "" in delivered_date means "not delivered yet".
const orders = [
  { order_id: "MED-001", city: "Mumbai",    order_date: "2026-11-01", promised_date: "2026-11-04", delivered_date: "2026-11-03" },
  { order_id: "MED-002", city: "Delhi",     order_date: "2026-11-02", promised_date: "2026-11-05", delivered_date: "2026-11-07" },
  { order_id: "MED-003", city: "Bengaluru", order_date: "2026-11-03", promised_date: "2026-11-06", delivered_date: "2026-11-06" },
  { order_id: "MED-004", city: "Pune",      order_date: "2026-11-05", promised_date: "2026-11-08", delivered_date: "" },
  { order_id: "MED-005", city: "Chennai",   order_date: "2026-11-06", promised_date: "2026-11-09", delivered_date: "2026-11-10" }
];

// An order is late only if it is delivered AND delivered after the promised date.
// Not delivered yet (blank date) is NOT marked late in v2.
function isLate(order) {
  if (order.delivered_date === "") {
    return false;
  }
  return new Date(order.delivered_date) > new Date(order.promised_date);
}

const tbody = document.getElementById("orders-body");

orders.forEach(function (order) {
  const late = isLate(order);
  const row = document.createElement("tr");
  row.innerHTML =
    "<td>" + order.order_id + "</td>" +
    "<td>" + order.city + "</td>" +
    "<td>" + order.order_date + "</td>" +
    "<td>" + order.promised_date + "</td>" +
    "<td>" + order.delivered_date + "</td>" +
    "<td>" + (late ? '<span class="late-flag">Late</span>' : "") + "</td>";
  tbody.appendChild(row);
});
