# List Command 🗂️

A simple Node.js CLI tool to list files and folders in a given directory with colored output using Chalk.

## 📦 Features

- Lists all items (files and directories) in the specified folder.
- Uses color to distinguish between files and folders:
  - 🟩 Green → Files
  - 🟥 Red → Directories
  - 🟨 Yellow → Skipped (due to permission issues)
- Gracefully handles permission errors (like `DumpStack.log.tmp`).

## 📁 Example Output

index.js ✅ (green)
node_modules/ 🟥 (red)
Skipped: DumpStack.log.tmp (Permission denied) ⚠️ (yellow)

## 🚀 Usage

### 1. Clone or download this repo.

### 2. Install dependencies

```bash
npm install chalk
  ```
### 3. Run the script

nls [optional_path] 

If no path is provided, it defaults to the current working directory.

## 🧠 How It Works

Reads the contents of the target directory using fs.readdir.
For each item, gets metadata using fs.promises.lstat.
Uses chalk to colorize the output based on whether the item is a file or directory.
Handles inaccessible files using try/catch so that one error doesn't crash the script.

## 🛠️ Technologies Used

Node.js (v22+)

chalk

## 📄 License
This project is licensed under the MIT License.

Created by Faizan 💻
