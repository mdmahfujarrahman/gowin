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

export const timeAgo = dateString => {
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 2629800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 31557600) {
    const months = Math.floor(diffInSeconds / 2629800);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInSeconds / 31557600);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};
