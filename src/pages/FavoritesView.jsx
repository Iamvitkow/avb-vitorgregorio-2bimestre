import { useFavorites } from "../context/FavoritesContext";
import ItemCard from "../components/ItemCard";

const FavoritesView = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum item favoritado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favorites.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesView;
