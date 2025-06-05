import { useFavorites } from "../context/FavoritesContext";

const ItemCard = ({ item }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{item.nome}</h2>
      <p>{item.descricao}</p>
      <button
        className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
        onClick={() =>
          isFavorite(item.id) ? removeFavorite(item.id) : addFavorite(item)
        }
      >
        {isFavorite(item.id) ? "Desfavoritar" : "Favoritar"}
      </button>
    </div>
  );
};

export default ItemCard;
