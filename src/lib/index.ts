import type { FeatureCollection } from 'geojson';

export function foo(): FeatureCollection {
	return {
		type: 'FeatureCollection',
		features: []
	};
}
