"use client";

export default function Map() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359537.0372323226!2d-75.8002569!3d45.25015655000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1744350677941!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Ottawa, Ontario"
          aria-label="Google Map showing our location in Ottawa"
        ></iframe>
      </div>
      <div className="p-4 bg-gray-50 text-center text-sm text-secondary-light">
        <a
          href="https://maps.google.com/?q=Ottawa,+ON"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#d6781c] hover:underline transition-colors font-medium"
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
}
