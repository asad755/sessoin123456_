// Define a class for the chat system
class ChatSystem {
    private username: string;

    constructor(username: string) {
        this.username = username;
    }

    public greetUser(): void {
        console.log(`Hello ${this.username}! Welcome to the chat system.`);
        this.displayOptions();
    }

    private displayOptions(): void {
        console.log("What would you like to do?");
        console.log("1. Send a message");
        console.log("2. Read messages");
        console.log("3. Exit");

        this.handleInput();
    }

    private handleInput(): void {
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Enter your choice: ", (choice: string) => {
            switch (choice) {
                case "1":
                    this.sendMessage();
                    break;
                case "2":
                    this.readMessages();
                    break;
                case "3":
                    console.log("Exiting chat system. Goodbye!");
                    rl.close();
                    break;
                default:
                    console.log("Invalid choice. Please enter a valid option.");
                    this.displayOptions();
                    break;
            }
        });
    }

    private sendMessage(): void {
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Enter your message: ", (message: string) => {
            console.log(`Message sent: "${message}"`);
            this.displayOptions();
        });
    }

    private readMessages(): void {
        // Simulate reading messages from a database or file
        console.log("No messages to read at the moment.");
        this.displayOptions();
    }
}

// Create an instance of the ChatSystem class
const username = "User";
const chatSystem = new ChatSystem(username);
chatSystem.greetUser();
