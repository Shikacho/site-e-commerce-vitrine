import type { Product } from "./types";
type Query = { [key: string]: string };
export function getFilteredProducts(list: Product[], query: Query){
  const { category, format, technique, orientation, dominantColor, support, min, max } = query;
  return list.filter(p=>{
    if(category && p.category!==category) return false;
    if(format && p.format!==format) return false;
    if(technique && p.technique!==technique) return false;
    if(orientation && p.orientation!==orientation) return false;
    if(dominantColor && p.dominantColor!==dominantColor) return false;
    if(support && p.support!==support) return false;
    const priceMin = min ? Number(min) : -Infinity;
    const priceMax = max ? Number(max) : Infinity;
    if(!(p.price>=priceMin && p.price<=priceMax)) return false;
    return true;
  });
}
