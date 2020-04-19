function createProduct(id, name, description, itemsInStock, primaryImageUrl = 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2-800x954.jpg') {
  return {
    id, name, description, itemsInStock, primaryImageUrl
  };
}
const products = [
  createProduct(1, 'Xbox One', 'Cool console', 3),
  createProduct(2, 'Xbox 360', 'Older but still cool console', 2),
  createProduct(3, 'Some Item', 'Should not be displayed', 0),
];

export {products};
