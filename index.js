// Define a class for the chat system
var ChatSystem = /** @class */ (function () {
    function ChatSystem(username) {
        this.username = username;
    }
    ChatSystem.prototype.greetUser = function () {
        console.log("Hello ".concat(this.username, "! Welcome to the chat system."));
        this.displayOptions();
    };
    ChatSystem.prototype.displayOptions = function () {
        console.log("What would you like to do?");
        console.log("1. Send a message");
        console.log("2. Read messages");
        console.log("3. Exit");
        this.handleInput();
    };
    ChatSystem.prototype.handleInput = function () {
        var _this = this;
        var readline = require("readline");
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter your choice: ", function (choice) {
            switch (choice) {
                case "1":
                    _this.sendMessage();
                    break;
                case "2":
                    _this.readMessages();
                    break;
                case "3":
                    console.log("Exiting chat system. Goodbye!");
                    rl.close();
                    break;
                default:
                    console.log("Invalid choice. Please enter a valid option.");
                    _this.displayOptions();
                    break;
            }
        });
    };
    ChatSystem.prototype.sendMessage = function () {
        var _this = this;
        var readline = require("readline");
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("Enter your message: ", function (message) {
            console.log("Message sent: \"".concat(message, "\""));
            _this.displayOptions();
        });
    };
    ChatSystem.prototype.readMessages = function () {
        // Simulate reading messages from a database or file
        console.log("No messages to read at the moment.");
        this.displayOptions();
    };
    return ChatSystem;
}());
// Create an instance of the ChatSystem class
var username = "User";
var chatSystem = new ChatSystem(username);
chatSystem.greetUser();
