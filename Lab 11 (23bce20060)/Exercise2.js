const fs = require("fs");

// Create file
fs.writeFile("data.txt", "Initial content\n", (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }
    console.log("File created successfully");

    // Read file
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }
        console.log("File content:\n" + data);

        // Append data
        fs.appendFile("data.txt", "Added new line\n", (err) => {
            if (err) {
                console.log("Error appending");
                return;
            }
            console.log("Content appended");

            // Read updated file
            fs.readFile("data.txt", "utf8", (err, updatedData) => {
                if (err) {
                    console.log("Error reading updated file");
                    return;
                }
                console.log("Updated content:\n" + updatedData);

                // Delete file
                fs.unlink("data.txt", (err) => {
                    if (err) {
                        console.log("Error deleting file");
                        return;
                    }
                    console.log("File deleted successfully");
                });
            });
        });
    });
});