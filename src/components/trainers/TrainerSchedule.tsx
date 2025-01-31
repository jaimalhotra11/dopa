import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface ScheduleProps {
  schedule: {
    day: string;
    slots: { time: string; available: boolean }[];
  }[];
}

const TrainerSchedule: React.FC<ScheduleProps> = ({ schedule }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {schedule.map((day, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center mb-3">
            <Calendar className="h-5 w-5 text-[#116DEC] mr-2" />
            <span className="font-semibold">{day.day}</span>
          </div>
          <div className="space-y-2">
            {day.slots.map((slot, slotIndex) => (
              <div
                key={slotIndex}
                className={`flex items-center justify-between p-2 rounded ${
                  slot.available ? 'bg-green-50' : 'bg-red-50'
                }`}
              >
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-gray-600" />
                  <span>{slot.time}</span>
                </div>
                <span
                  className={`text-sm font-medium ${
                    slot.available ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {slot.available ? 'Available' : 'Booked'}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainerSchedule;