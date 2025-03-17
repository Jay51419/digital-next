import { FaCalendar, FaCalendarPlus } from 'react-icons/fa'

export default function Appointment() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-[#FF5B12] text-2xl font-medium text-center mb-4">Schedule Meeting</h2>
      <p className="text-center text-gray-700 mb-6">
        Schedule a meeting to discuss potential opportunities for collaboration
      </p>

      <div className="space-y-4">
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#1e0e52] text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <FaCalendar />
          <span>Book on Calendly</span>
        </a>

        <a
          href="#"
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#1e0e52] text-[#1e0e52] rounded-lg hover:bg-gray-50 transition-colors"
        >
          <FaCalendarPlus />
          <span>Add to Calendar</span>
        </a>
      </div>
    </div>
  )
} 