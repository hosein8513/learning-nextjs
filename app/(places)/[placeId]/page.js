import React from 'react';
import PlaceCom from './PlaceCom';

export async function generateMetadata({ params }) {
  const { placeId } = await params; // اگر Next 15 داری

  return {
    title: `place ${placeId}`,
  };
}

const place = [
  { id: 1, name: 'Switzerland', continent: 'Europe', population: '8.66', area: '41.290', price: '1,100,200' },
  { id: 2, name: 'Caraeebian', continent: 'Europe', population: '44.48', area: '275.400', price: '946,000' },
  { id: 3, name: 'France', continent: 'Europe', population: '67.41', area: '551.500', price: '425,600' }
];

const Places = async ({ params }) => {
  const { placeId } = await params; // اگر Next 15 داری

  const selectedPlace = place.find(
    p => p.id === Number(placeId)
  );

  if (!selectedPlace) {
    return <h1>Place not found</h1>;
  }

  return <PlaceCom places={selectedPlace} />;
};

export default Places;