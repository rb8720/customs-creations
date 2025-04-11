import React from "react";

export default function MakerBusinessHome() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Custom Creations by Rebecca</h1>
      <p className="text-lg mb-6">
        Handcrafted goods made with precision laser cutting and 3D printing. From
        personalized gifts to functional home decor, every piece is crafted with care.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Personalized Wood Signs</h2>
          <p>Custom names, quotes, and house numbers made with laser-cut wood.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">3D Printed Planters</h2>
          <p>Modern, lightweight, and customizable planters made with biodegradable PLA.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Custom Keychains</h2>
          <p>Fun and functional keychains made from wood, acrylic, or resin-infused 3D prints.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Holiday Decor</h2>
          <p>Ornaments, wreath accents, and seasonal signs laser-cut for festive vibes.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Customized Wall Art</h2>
          <p>Engraved acrylic or wood panels for statement decor or gifts.</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Toy & Game Accessories</h2>
          <p>Dice towers, card organizers, board game inserts designed and 3D printed for gamers.</p>
        </div>
      </section>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Let’s Create Something Together!</h2>
        <p className="mb-4">
          Contact me for custom orders, bulk pricing, or design collaborations.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Me</button>
      </div>
    </main>
  );
}
