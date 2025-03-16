import { promises as fs } from 'fs';
import path from 'path';
import { isBefore, isAfter } from 'date-fns';

/*** File system operations ***/
export default function writeModelData(data: string, filename: string): Promise<void> {
  const storagePath = path.join(process.cwd(), `assets`, filename);
  return fs.writeFile(storagePath, data);
}


/*** external APIs ***/
function fetchRobotStatus(robotId: string): unknown {
  const request = new XMLHttpRequest();
  request.open('GET', `https://api.robotworld.com/status/${robotId}`, false);
  request.send();

  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data.status;
  } else {
    throw new Error('Failed to fetch robot status');
  }
}

/*** Date & Time ***/
function getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return 'Good morning!';
  } else if (currentHour < 18) {
    return 'Good afternoon!';
  } else {
    return 'Good evening!';
  }
}

/*** random number operations ***/
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

/*** third party libraries ***/
export function isShopOpen(currentDateAndTime: Date, openingToday: Date, closingToday: Date): boolean {
  return isAfter(openingToday, currentDateAndTime) && isBefore(closingToday, currentDateAndTime);
}
