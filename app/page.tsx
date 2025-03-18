"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const routes = [
    { name: "Bipen Tiwari", company: "A3B", route: "/A3B" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoutes = routes.filter((route) =>
    route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    route.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Digital Business Cards
      </h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <hr />

      {/* Filtered Results */}
      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route) => (
          <div key={route.route}>
            <div className="my-2 flex justify-between items-center">
              <h2 className="font-bold">{route.name}</h2>
              <Link className="underline" href={route.route}>
                {route.company}
              </Link>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <p className="text-center mt-4 text-gray-500">No results found.</p>
      )}
    </div>
  );
}
