import { Product } from './types';

export const categories = [
  { slug: "abstrait", label: "Abstrait" },
  { slug: "paysages", label: "Paysages" },
  { slug: "portraits", label: "Portraits" },
  { slug: "typographie", label: "Typographie" },
  { slug: "noir-et-blanc", label: "Noir-et-blanc" },
];
export const formats = ["A4","A3","A2","50x70","70x100"];
export const techniques = ["Huile","Aquarelle","Photo","Impression giclée"];
export const orientations = ["Portrait","Paysage","Carré"];
export const supports = ["Toile","Papier","Aluminium"];
export const colors = ["Rouge","Bleu","Vert","Jaune","Noir & blanc","Multicolore"];

export const products: Product[] = [
  {
    "id": "art1",
    "slug": "oeuvre-1",
    "name": "Oeuvre 1",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "abstrait",
    "price": 59,
    "format": "A4",
    "technique": "Impression giclée",
    "orientation": "Portrait",
    "dominantColor": "Rouge",
    "support": "Papier",
    "image": "/images/art-1.jpg"
  },
  {
    "id": "art2",
    "slug": "oeuvre-2",
    "name": "Oeuvre 2",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "paysages",
    "price": 79,
    "format": "A3",
    "technique": "Photo",
    "orientation": "Paysage",
    "dominantColor": "Bleu",
    "support": "Toile",
    "image": "/images/art-2.jpg"
  },
  {
    "id": "art3",
    "slug": "oeuvre-3",
    "name": "Oeuvre 3",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "portraits",
    "price": 99,
    "format": "A2",
    "technique": "Huile",
    "orientation": "Carré",
    "dominantColor": "Vert",
    "support": "Aluminium",
    "image": "/images/art-3.jpg"
  },
  {
    "id": "art4",
    "slug": "oeuvre-4",
    "name": "Oeuvre 4",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "typographie",
    "price": 129,
    "format": "50x70",
    "technique": "Aquarelle",
    "orientation": "Portrait",
    "dominantColor": "Jaune",
    "support": "Papier",
    "image": "/images/art-4.jpg"
  },
  {
    "id": "art5",
    "slug": "oeuvre-5",
    "name": "Oeuvre 5",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "noir-et-blanc",
    "price": 149,
    "format": "70x100",
    "technique": "Impression giclée",
    "orientation": "Paysage",
    "dominantColor": "Noir & blanc",
    "support": "Toile",
    "image": "/images/art-5.jpg"
  },
  {
    "id": "art6",
    "slug": "oeuvre-6",
    "name": "Oeuvre 6",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "abstrait",
    "price": 169,
    "format": "A4",
    "technique": "Photo",
    "orientation": "Carré",
    "dominantColor": "Multicolore",
    "support": "Aluminium",
    "image": "/images/art-6.jpg"
  },
  {
    "id": "art7",
    "slug": "oeuvre-7",
    "name": "Oeuvre 7",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "paysages",
    "price": 199,
    "format": "A3",
    "technique": "Huile",
    "orientation": "Portrait",
    "dominantColor": "Rouge",
    "support": "Papier",
    "image": "/images/art-7.jpg"
  },
  {
    "id": "art8",
    "slug": "oeuvre-8",
    "name": "Oeuvre 8",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "portraits",
    "price": 59,
    "format": "A2",
    "technique": "Aquarelle",
    "orientation": "Paysage",
    "dominantColor": "Bleu",
    "support": "Toile",
    "image": "/images/art-8.jpg"
  },
  {
    "id": "art9",
    "slug": "oeuvre-9",
    "name": "Oeuvre 9",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "typographie",
    "price": 79,
    "format": "50x70",
    "technique": "Impression giclée",
    "orientation": "Carré",
    "dominantColor": "Vert",
    "support": "Aluminium",
    "image": "/images/art-9.jpg"
  },
  {
    "id": "art10",
    "slug": "oeuvre-10",
    "name": "Oeuvre 10",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "noir-et-blanc",
    "price": 99,
    "format": "70x100",
    "technique": "Photo",
    "orientation": "Portrait",
    "dominantColor": "Jaune",
    "support": "Papier",
    "image": "/images/art-10.jpg"
  },
  {
    "id": "art11",
    "slug": "oeuvre-11",
    "name": "Oeuvre 11",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "abstrait",
    "price": 129,
    "format": "A4",
    "technique": "Huile",
    "orientation": "Paysage",
    "dominantColor": "Noir & blanc",
    "support": "Toile",
    "image": "/images/art-11.jpg"
  },
  {
    "id": "art12",
    "slug": "oeuvre-12",
    "name": "Oeuvre 12",
    "description": "Affiche d'art abstrait imprimée sur support premium, prête à accrocher.",
    "category": "paysages",
    "price": 149,
    "format": "A3",
    "technique": "Aquarelle",
    "orientation": "Carré",
    "dominantColor": "Multicolore",
    "support": "Aluminium",
    "image": "/images/art-12.jpg"
  }
];
