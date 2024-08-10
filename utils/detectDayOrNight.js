import moment from "moment";

export function detectIsDayTime() {
  const currentHour = moment().hour();

  // Assuming day is from 6 AM (06:00) to 6 PM (18:00)
  if (currentHour >= 6 && currentHour < 18) {
    return true; // Daytime
  } else {
    return false; // Nighttime
  }
}
