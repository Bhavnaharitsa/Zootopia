import React, {useState, useEffect} from 'react';

export default function loadApiImages() {
  const url = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
  try {
    return fetch(url);
  } catch (err) {
    console.log('error fetching data from Source', err);
  }
}
