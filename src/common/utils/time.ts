export function TimeToSeconds(time: string) {
  const [hours = '0', min = '0', sec = '0'] = time.split(':');

  const hoursToSec = Number(hours) * 3600;
  const minToSec = Number(min) * 60;

  return hoursToSec + minToSec + Number(sec);
}
