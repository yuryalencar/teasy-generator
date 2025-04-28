# TeasyFSMGenerator

## Overview
TeasyFSMGenerator is a web application designed to generate test sequences using Finite State Machine (FSM) methodology. This tool helps QA engineers and developers create comprehensive test cases based on state transitions in their applications.

## Features
- FSM editor to link windows
- Automatic test sequence generation
- Create an paths possible based in the diagram created
- Export test sequences in robot framework script
- User-friendly interface for defining states and transitions

## How It Works
1. **Define States**: Create the states that represent different conditions of your application (pages of your application)
2. **Define Transitions**: Specify how the application moves between states (actions)
3. **Generate Test Sequences**: The application automatically creates optimal test sequences
4. **Export Results**: Download the generated test sequences for use in robot framework framework

## Getting Started - Frontend
1. Clone the repository
2. Install dependencies with `npm install` (or your package manager of choice)
3. Run the application with `npm start`
4. Access the web interface at `http://localhost:3000`

## Getting Started - Backend
1. Install Deno by following the instructions at [deno.land](https://deno.land/#installation)
2. Clone the repository if you haven't already
3. Navigate to the backend directory: `cd backend`
4. Start the server: `deno run --allow-net --allow-read server.ts`
5. The API will be available at `http://localhost:8000`

### Backend Requirements
- Deno v0.1
- Access to filesystem for reading configuration files
- Network access for API functionality

## Frontend Requirements
- Node.js (v14 or higher)
- Modern web browser

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
