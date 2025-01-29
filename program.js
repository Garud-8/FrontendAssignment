import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [images, setImages] = useState(null); 

  useEffect(() => {
    fetch("/api/placeholder/400/300") 
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(() => setImages([])); 
  }, []);

  return (
    <div className="container mx-auto p-4"> 
      <h1 className="text-lg font-bold">Image Gallery</h1>
      <div className="grid grid-cols-1"> 
        {images && images.length > 0 ? (
          images.map((img) => (
            <div key={img.id} className="border p-2"> 
              <img src={img.imageUrl} alt={img.title} />
              <p>{img.title}</p>
            </div>
          ))
        ) : (
          <p>No images available</p> 
        )}
      </div>
    </div>
  );
};

export default Dashboard;
