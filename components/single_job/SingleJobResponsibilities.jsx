import React from "react";

export default function SingleJobResponsibilities({
  responsibilities,
  department,
}) {
  return (
    <div id="responsibilities">
      <h2 className="text-lg md:text-xl font-semibold text-blue-800">
        Responsibilities & Context
      </h2>

      <div className="mt-6">
        <p className="text-sm md:text-base">{responsibilities}</p>
      </div>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Department</h4>
        <p className="text-sm md:text-base">{department}</p>
      </div>

      <div className="mt-4">
        <h4 className="md:text-lg font-medium">Major Responsibilities</h4>
        <p className="text-sm md:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          sequi est ut eos, maxime laboriosam eius natus veniam odit, rem in
          facere perferendis perspiciatis, obcaecati suscipit hic at! Sed,
          alias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere accusantium tempore facilis dicta rem error! Officia libero
          nobis autem aliquam aperiam fugit eum, repudiandae accusantium ea ex
          corrupti atque praesentium consequuntur nam eveniet ad inventore
          obcaecati facere. Corporis error dolores alias ex vitae, quaerat sed
          voluptatum veniam temporibus perspiciatis? Ipsum aspernatur
          consectetur aliquam suscipit, aperiam doloribus atque, quis
          dignissimos voluptatibus cum libero veniam rem consequuntur corrupti
          laudantium, sint voluptas magnam iure autem. Consequatur inventore
          excepturi asperiores, quis, unde est aspernatur aut neque dolores,
          tempora omnis pariatur sint porro rerum blanditiis perspiciatis
          obcaecati laborum saepe quaerat voluptatem! Aliquam deserunt veniam
          vero.
        </p>
      </div>
    </div>
  );
}
