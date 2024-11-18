#include <iostream>
#include <map>
#include <vector>
#include <algorithm>
#include <sstream>

class TimeTravelersArchive {
private:
    using Entry = std::pair<int, std::string>;
    std::map<std::string, std::vector<Entry>> data;

public:
    void Store(const std::string& key, const std::string& value, int timestamp) {
        data[key].emplace_back(timestamp, value);
    }

    std::string Retrieve(const std::string& key, int timestamp) {
        auto& entries = data[key];
        auto it = std::upper_bound(entries.begin(), entries.end(), timestamp,
            [](int ts, const Entry& entry) { return ts < entry.first; });

        return (it != entries.begin()) ? std::prev(it)->second : "empty";
    }
};

int main() {
    TimeTravelersArchive archive;

    std::cout << "Enter commands (type 'exit' to end):\n";

    // Read the entire input
    std::string input;
    std::string line;
    while (std::getline(std::cin, line) && line != "exit") {
        input += line + '\n';
    }

    std::istringstream iss(input);

    std::string command;
    while (iss >> command) {
        if (command == "Store") {
            std::string key, value;
            int timestamp;
            iss >> key >> value >> timestamp;
            archive.Store(key, value, timestamp);
        } else if (command == "Retrieve") {
            std::string key;
            int timestamp;
            iss >> key >> timestamp;
            std::cout << archive.Retrieve(key, timestamp) << std::endl;
        } else if (!command.empty()) {
            std::cout << "Invalid command. Please use 'Store' or 'Retrieve'." << std::endl;
            return 1;  // Exit with an error code
        }
    }

    return 0;
}
