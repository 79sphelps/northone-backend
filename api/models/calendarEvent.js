module.exports = (mongoose) => {
  const CalendarEvent = mongoose.model(
    "calendarEvent",
    mongoose.Schema(
      {
        title: String,
        description: String,
        status: Boolean,
        dueDate: String,
        start: String,
      },
      { timestamps: true }
    )
  );

  return CalendarEvent;
};
