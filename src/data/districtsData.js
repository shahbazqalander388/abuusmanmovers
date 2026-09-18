/**
 * Data layer for Jubail sub-districts and regional coverage areas.
 * Re-exports and connects to src/data/jubailLocations.js
 */
import {
  jubailDistricts,
  nearbyCities,
  ALL_LOCATIONS,
  getLocationBySlug,
} from './jubailLocations';

export { jubailDistricts, nearbyCities, ALL_LOCATIONS, getLocationBySlug };

// Primary exports for Jubail and regional locations
export const JUBAIL_DISTRICTS = jubailDistricts;
export const NEARBY_CITIES = nearbyCities;

// Backward-compatible alias so existing imports throughout the app continue to function seamlessly
export const RIYADH_DISTRICTS = ALL_LOCATIONS;

export const getDistrictBySlug = (slug) => {
  return getLocationBySlug(slug);
};

export default ALL_LOCATIONS;
