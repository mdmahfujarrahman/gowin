const isNight = timeZone => {
  const now = new Date().toLocaleString('en-US', {
    timeZone: timeZone,
  });
  const date = new Date(now);
  const hour = date.getHours();
  const isNight = hour >= 18 || hour <= 6;
  return isNight;
};

export const clockTimer = timeZone => {
  const now = new Date();
  const options = {
    timeZone: timeZone,
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const formattedTime = now.toLocaleTimeString('en-US', options);
  const time = formattedTime.split(':');

  console.log(isNight(timeZone));
  return {
    hour: time[0],
    minute: time[1],
    second: time[2].split(' ')[0],
    hour12: time[2].split(' ')[1],
    day: now.toLocaleDateString('en-US', { weekday: 'long' }),
    date: now.toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
    isNight: isNight(timeZone),
  };
};
