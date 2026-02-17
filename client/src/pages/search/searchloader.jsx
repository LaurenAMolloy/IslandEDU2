import { getFeatured } from '../../api/queries/getFeatured';

export async function searchLoader() {
    const featuredSchools = await getFeatured();

    return {
        featuredSchools
    }
}