import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: "Yılbaşı",
      start: new Date(2023, 1, 1), // 1 Ocak 2023
      end: new Date(2023, 1, 1),
    },
    {
      title: "Ulusal Egemenlik ve Çocuk Bayramı",
      start: new Date(2023, 4, 23), // 23 Nisan 2023
      end: new Date(2023, 4, 23),
    },
    {
      title: "İşçi Bayramı",
      start: new Date(2023, 5, 1), // 1 Mayıs 2023
      end: new Date(2023, 5, 1),
    },
    {
      title: "Ramazan Bayramı (1. Gün)",
      start: new Date(2023, 4, 10), // Ramazan Bayramı'nın 1. günü
      end: new Date(2023, 4, 13),
    },
    {
      title: "Kurban Bayramı (1. Gün)",
      start: new Date(2023, 6, 16), // Kurban Bayramı'nın 1. günü
      end: new Date(2023, 6, 20),
    },

    {
      title: "29 Ekim Cumhuriyet Bayramı ",
      start: new Date(2023, 10, 29), // Kurban Bayramı'nın 1. günü
      end: new Date(2023, 10, 29),
    },
    // Daha fazla tatil ekleyebilirsiniz
  ];

  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ width: 1500, height: 750 }}
      />
    </div>
  );
};

export default MyCalendar;
