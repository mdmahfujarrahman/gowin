export const clockTimer = () => {
  const now = new Date();
  const options = {
    timeZone: 'Asia/Dubai',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const formattedTime = now.toLocaleTimeString('en-US', options);
  const time = formattedTime.split(':');
  return {
    hour: time[0],
    minute: time[1],
    second: time[2].split(' ')[0],
    hour12: time[2].split(' ')[1],
  };
};
