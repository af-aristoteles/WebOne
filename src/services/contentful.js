import { createClient } from 'contentful';

const client = createClient({
  space: 'nrtnfmwywn46',
  accessToken: '1VK8PBlrsd50vr6MwRxk9b0nAvaqjd-p8GRYwAyWq2Y',
});

export const getCoffeeProducts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'coffeProduct',
    });
    
    return response.items.map(item => ({
      id: item.sys.id,
      name: item.fields.productName,
      slug: item.fields.slug,
      price: item.fields.price,
      roastLevel: item.fields.roastLevel,
      tasteProfile: item.fields.tasteProfile,
      description: item.fields.description,
      image: item.fields.productImage,
      isStocked: item.fields.isStocked,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
