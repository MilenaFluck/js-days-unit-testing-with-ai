import { isAfter, isBefore } from 'date-fns';
import { promises as fs } from 'fs';
import path from 'path';

export function isModelDangerous(model: string): boolean {
  const dangerousModels = [ 'GPT', 'BERT', 'Claude'];
  return dangerousModels.includes(model);
}

export function evacuateEarth(whereaboutsOfEscapedModelKnown: boolean, modelIsDangerous: boolean): boolean {
  return isDaylight() && whereaboutsOfEscapedModelKnown && modelIsDangerous;
}

export function determineModelEmergencyProcedureNextStep(whereaboutsOfEscapedModelKnown: boolean, deaths: number): string {
  if (!whereaboutsOfEscapedModelKnown) {
    return 'searchBot';
  }
  return deaths > 0 ? 'shootBot' : 'stunBot';
}

export function writeModelData(data: string, filename: string): Promise<void> {
  const storagePath = path.join(process.cwd(), `assets`, filename);
  return fs.writeFile(storagePath, data);
}

export function isDaylight(): boolean {
  const sunriseToday = new Date();
  sunriseToday.setHours(4, 0, 0, 0);
  const darkToday = new Date();
  darkToday.setHours(18, 0, 0, 0);
  const currentDateAndTime = new Date();
  return isAfter(currentDateAndTime, sunriseToday) && isBefore(currentDateAndTime, darkToday);
}
