// Notifications App Starter
console.log("Notifications App is running!");
function showNotification(message) {
    console.log("Notification: " + message);
}
showNotification("Welcome to your Notifications App!");
// Notifications App Starter
console.log("Notifications App is running!");
function showNotification(message) {
    console.log("Notification: " + message);
}
showNotification("Welcome to your Notifications App!");
// Example: show multiple notifications
function showMultipleNotifications(messages) {
    messages.forEach(msg => {
        console.log("Notification: " + msg);
    });
}

// Test
showMultipleNotifications([
    "New message received!",
    "Your download is complete",
    "Reminder: Meeting at 5 PM"
]);