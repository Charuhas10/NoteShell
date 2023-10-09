# NoteShell 📝

NoteShell is a simple and efficient command-line interface tool built with Node.js, designed to help you quickly jot down, manage, and retrieve notes right from your terminal.

## Features

- Create new notes with optional tags.
- Retrieve all notes or search by content.
- Delete individual notes or clean all of them at once.
- View notes in a web interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have `Node.js` and `npm` installed.

### Installation

Clone the repository:

```
git clone https://github.com/Charuhas10/NoteShell.git
```

Navigate to the project directory:

```
cd <Your Project Directory Name>
```

Install the required dependencies:

```
npm install
```

Link the CLI tool globally (this allows you to use the note command from anywhere):

```
npm link
```

## How to use:

All the commands you can use with NoteShell are listed below. You can also use the --help flag to get a list of all the commands.
```
note --help
```

Create a new note:

```
note new "Your Note Here" --tags "tag1,tag2"
```

Get all notes:

```
note all
```

Get Matching Notes:

```
note find "some text matching your already saved notes"
```

Remove a note by id:

```
note remove <id>
```

Launch website to see notes:

```
note web [port]
```

Remove all notes:

```
note clean
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## License
This projecr is licensed under MIT License
