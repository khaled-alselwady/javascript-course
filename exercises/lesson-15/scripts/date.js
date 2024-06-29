function isWeekend(date) {
  if (!date) {
    return;
  }

  const dayOfWeek = date.format('dddd');

  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export default isWeekend;